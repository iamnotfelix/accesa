using accesa.Dtos.Quests;

namespace accesa.Dtos.Users
{
    public record UserDto
    {
        public string? Name { get; set; }
        public int Points { get; set; }
    }
}