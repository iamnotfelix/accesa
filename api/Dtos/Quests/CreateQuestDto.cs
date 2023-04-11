using System.ComponentModel.DataAnnotations;

namespace accesa.Dtos.Quests
{
    public record CreateQuestDto
    {
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Description { get; set; }
        [Required]
        public int Points { get; set; }
        [Required]
        public string? Key { get; set; }
        [Required]
        public Guid UserId { get; set; }
    }
}