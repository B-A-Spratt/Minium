using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using System;
using System.Text;
using WebAPI.Entities;

namespace WebAPI
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "ApiCorsPolicy";
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApiContext>(o =>
                o.UseSqlServer(Configuration.GetConnectionString("DevConnection")));
            services.AddDefaultIdentity<User>()
                .AddEntityFrameworkStores<ApiContext>();

            services.Configure<PasswordHasherOptions>(o =>
            {
                o.IterationCount = 64000;
            });

            services.AddCors(o =>
            {
                o.AddPolicy(MyAllowSpecificOrigins,
                    b =>
                    {
                        b.WithOrigins("http://localhost:4200")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            services.AddHttpsRedirection(o =>
            {
                o.RedirectStatusCode = StatusCodes.Status308PermanentRedirect;
                o.HttpsPort = 44346;
            });

            services.AddAuthentication()
                .AddJwtBearer(o =>
                {
                    o.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = Configuration["Tokens:Issuer"],
                        ValidAudience = Configuration["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
                    };
                });

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(o =>
                {
                    var resolver = o.SerializerSettings.ContractResolver;

                    if (resolver != null)
                    {
                        (resolver as DefaultContractResolver).NamingStrategy = null;
                    }
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors(MyAllowSpecificOrigins);
            app.UseHttpsRedirection();
            //app.UseCookiePolicy();

            //app.UseAuthentication();

            app.UseMvc();
        }
    }
}
