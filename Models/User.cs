namespace accesa.Models
{
    public record User
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int Points { get; set; }

        // Navigation properties
        public ICollection<Quest> Quests { get; set; } = new List<Quest>();
        public ICollection<Badge> Badges { get; set; } = new List<Badge>();
    }
}