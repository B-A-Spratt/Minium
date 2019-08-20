using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Entities
{
    public class Career
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int JobTitle { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int Game { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int Location { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int WorkType { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime? PostDate { get; set; }
    }
}
