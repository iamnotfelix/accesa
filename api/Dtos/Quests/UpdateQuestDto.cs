using System.ComponentModel.DataAnnotations;

namespace accesa.Dtos.Quests
{
    public record UpdateQuestDto
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Points { get; set; }
        public string? Key { get; set; }
    }
}