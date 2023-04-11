using accesa.Dtos.Users;

namespace accesa.Dtos.Quests
{
    public record GetByIdQuestDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Points { get; set; }
        public string? Key { get; set; }
        public UserDto? User { get; set; }
    }
}