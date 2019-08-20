using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebAPI.Entities;

namespace WebAPI
{
    public class ApiContext : IdentityDbContext<User>
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
            // intentionally left blank
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // make email unique
            modelBuilder.Entity<User>()
                .HasIndex(i => i.Email)
                .IsUnique();
        }

        public DbSet<Career> Career { get; set; }
        public DbSet<User> User { get; set; }
    }
}
