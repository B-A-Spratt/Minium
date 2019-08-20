using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Entities;

namespace WebAPI.Controllers
{
    [Route("api/careers")]
    [ApiController]
    [Produces("application/json")]
    public class CareersController : ControllerBase
    {
        private readonly ApiContext context;

        public CareersController(ApiContext context)
        {
            this.context = context;
        }

        // GET: api/careers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Career>>> GetCareer()
        {
            return await context.Career.ToListAsync();
        }

        // GET: api/careers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Career>> GetCareer(int id)
        {
            var career = await context.Career.FindAsync(id);

            if (career == null)
            {
                return NotFound();
            }

            return career;
        }

        // PUT: api/careers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCareer(int id, [FromBody] Career career)
        {
            if (id != career.Id)
            {
                return BadRequest();
            }

            context.Entry(career).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CareerExists(id))
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

        // POST: api/careers
        [HttpPost]
        public async Task<ActionResult<Career>> PostCareer([FromBody] Career career)
        {
            context.Career.Add(career);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetCareer", new { id = career.Id }, career);
        }

        // DELETE: api/careers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Career>> DeleteCareer(int id)
        {
            var career = await context.Career.FindAsync(id);

            if (career == null)
            {
                return NotFound();
            }

            context.Career.Remove(career);
            await context.SaveChangesAsync();

            return career;
        }

        private bool CareerExists(int id)
        {
            return context.Career.Any(e => e.Id == id);
        }
    }
}
