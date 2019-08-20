using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Entities;

namespace WebAPI.Controllers
{
    [Route("api/users")]
    [ApiController]
    [Produces("application/json")]
    public class UsersController : ControllerBase
    {
        private readonly ApiContext context;
        private readonly PasswordHasher<User> passwordHasher;

        public UsersController(ApiContext context,
            PasswordHasher<User> passwordHasher)
        {
            this.context = context;
            this.passwordHasher = passwordHasher;
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await context.User.ToListAsync();
        }

        // GET: api/users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await context.User.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, [FromBody] User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            context.Entry(user).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/users
        [HttpPost]
        public async Task<ActionResult<User>> PostUser([FromBody] User user)
        {
            // hash the password
            user.PasswordHash = passwordHasher.HashPassword(user, user.PasswordHash);

            // boilerplate api
            context.User.Add(user);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var career = await context.User.FindAsync(id);
            if (career == null)
            {
                return NotFound();
            }

            context.User.Remove(career);
            await context.SaveChangesAsync();

            return career;
        }

        private bool UserExists(string id)
        {
            return context.User.Any(e => e.Id == id);
        }
    }
}
