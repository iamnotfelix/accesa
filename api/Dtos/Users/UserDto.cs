using accesa.Dtos.Quests;

namespace accesa.Dtos.Users
{
    public record UserDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int Points { get; set; }
    }
}