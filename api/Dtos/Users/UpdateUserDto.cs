using System.ComponentModel.DataAnnotations;

namespace accesa.Dtos.Users
{
    public record UpdateUserDto
    {
        public string? Name { get; set; }
        public int Points { get; set; }
    }
}