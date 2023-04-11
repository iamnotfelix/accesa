using accesa.Dtos.Badges;
using accesa.Dtos.Quests;
using accesa.Dtos.Users;
using accesa.Models;

namespace accesa
{
    public static class Extension
    {
        public static UserDto AsDto(this User user)
        {
            return new UserDto 
            {
                Id = user.Id,
                Name = user.Name,
                Points = user.Points
            };
        }

        public static GetByIdUserDto AsGetByIdDto(this User user)
        {
            return new GetByIdUserDto 
            {
                Id = user.Id,
                Name = user.Name,
                Points = user.Points,
                Badges = user.Badges.Select(b => b.AsDto()).ToList()
            };
        }

        public static BadgeDto AsDto(this Badge badge)
        {
            return new BadgeDto 
            {
                Id = badge.Id,
                Title = badge.Title
            };
        }

        public static QuestDto AsDto(this Quest quest)
        {
            return new QuestDto
            {
                Id = quest.Id,
                Name = quest.Name,
                Description = quest.Description,
                Points = quest.Points,
                UserId = quest.UserId
            };
        }

        public static GetByIdQuestDto AsGetByIdDto(this Quest quest)
        {
            return new GetByIdQuestDto
            {
                Id = quest.Id,
                Name = quest.Name,
                Description = quest.Description,
                Points = quest.Points,
                Key = quest.Key,
                User = quest.User?.AsDto()
            };
        }
    }
}