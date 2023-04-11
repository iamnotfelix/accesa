using accesa.Dtos.Badges;
using accesa.Dtos.Quests;

namespace accesa.Dtos.Users
{
    public record GetByIdUserDto
    {
        public string? Name { get; set; }
        public int Points { get; set; }
        public ICollection<QuestDto> Quests { get; set; } = new List<QuestDto>();
        public ICollection<BadgeDto> Badges { get; set; } = new List<BadgeDto>();
    }
}