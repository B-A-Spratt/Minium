using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Entities
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public override string Email { get => base.Email; set => base.Email = value; }

        [Required]
        [MinLength(6)]
        public override string PasswordHash { get => base.PasswordHash; set => base.PasswordHash = value; }
    }
}
