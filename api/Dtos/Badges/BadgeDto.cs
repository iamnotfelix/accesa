namespace accesa.Dtos.Badges
{
    public record BadgeDto
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
    }
}