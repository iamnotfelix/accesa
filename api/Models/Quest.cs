namespace accesa.Models
{
    public record Quest
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Points { get; set; }
        public string? Key { get; set; }


        // Navigation properties
        public Guid UserId { get; set; }
        public User? User { get; set; }
    }
}