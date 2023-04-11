namespace accesa.Dtos.Quests
{
    public record QuestDto
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Points { get; set; }
        public Guid UserId { get; set; }
    }
}