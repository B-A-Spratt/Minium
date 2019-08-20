using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Entities;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/logins")]
    [ApiController]
    [Produces("application/json")]
    public class LoginsController : ControllerBase
    {
        private readonly ApiContext context;
        private readonly IConfiguration config;
        private readonly IPasswordHasher<User> passwordHasher;

        public LoginsController(ApiContext context,
            IConfiguration config,
            IPasswordHasher<User> passwordHasher)
        {
            this.context = context;
            this.config = config;
            this.passwordHasher = passwordHasher;
        }

        // POST: api/logins
        [HttpPost]
        public async Task<IActionResult> PostLogin([FromBody] LoginModel model)
        {
            if (ModelState.IsValid)
            {
                List<User> users = await context.User.Where(e => e.Email == model.Email).ToListAsync();
                User user;

                try
                {
                    user = users[0];
                }
                catch
                {
                    var results = new { errorMessage = "email" };
                    return BadRequest(results);
                }

                if (user != null)
                {
                    var verifyPassword = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, model.Password);

                    if (verifyPassword == PasswordVerificationResult.Failed)
                    {
                        var results = new { errorMessage = "password" };
                        return BadRequest(results);
                    }
                    else if (verifyPassword == PasswordVerificationResult.Success)
                    {
                        return Created("", CreateToken(model.Email, model.RememberMe));
                    }
                    else if (verifyPassword == PasswordVerificationResult.SuccessRehashNeeded)
                    {
                        // put user with new passwordHash behind the scenes

                        return Created("", CreateToken(model.Email, model.RememberMe));
                    }
                }
            }

            return BadRequest();
        }
        private Object CreateToken(string email, bool rememberMe)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                config["Tokens:Issuer"],
                config["Tokens:Audience"],
                claims,
                expires: rememberMe ? DateTime.Now.AddYears(1) : DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            var results = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            };

            return results;
        }
    }
}