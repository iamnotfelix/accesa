using System.ComponentModel.DataAnnotations;

namespace accesa.Dtos.Users
{
    public record CreateUserDto
    {
        [Required]
        public string? Name { get; set; }
        [Required]
        public int Points { get; set; }
    }
}