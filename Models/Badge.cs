namespace accesa.Models
{
    public record Badge
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }

        // Navigation properties
        public Guid UserId { get; set; }
        public User? User { get; set; }
    }
}