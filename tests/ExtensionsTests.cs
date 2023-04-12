using accesa;
using accesa.Models;
using Xunit;

namespace tests
{
    public class ExtensionsTests
    {
        private readonly User user;
        private readonly Quest quest;
        private readonly Badge badge;

        public ExtensionsTests()
        {
            this.user = new User
            {
                Id = Guid.NewGuid(),
                Name = "Test Name",
                Points = 10,
                Quests = new List<Quest> {
                    new Quest {
                        Id = Guid.NewGuid(), 
                        Name = "Test Name", 
                        Description = "string",
                        Points = 10,
                        Key = "string"
                    }
                },
                Badges = new List<Badge> { 
                    new Badge { Id = Guid.NewGuid(), Title = "title1" }, 
                    new Badge { Id = Guid.NewGuid(), Title = "title2" }
                }
            };

            this.quest = new Quest 
            {
                Id = Guid.NewGuid(), 
                Name = "Test Name", 
                Description = "string",
                Points = 10,
                Key = "string",
                UserId = this.user.Id,
                User = this.user
            };

            this.badge = new Badge 
            {
                Id = Guid.NewGuid(), 
                Title = "title",
                UserId = this.user.Id,
                User = this.user
            };
        }

        [Fact]
        public void UserDtoTest()
        {
            var userDto = this.user.AsDto();
            Assert.True(userDto.Id == this.user.Id);
            Assert.True(userDto.Name == this.user.Name);
            Assert.True(userDto.Points == this.user.Points);
        }

        [Fact]
        public void GetByIdUserDtoTest()
        {
            var userDto = this.user.AsGetByIdDto();
            Assert.True(userDto.Id == this.user.Id);
            Assert.True(userDto.Name == this.user.Name);
            Assert.True(userDto.Points == this.user.Points);
            for (int i = 0; i < userDto.Badges.Count(); ++i)
            {
                Assert.True(userDto.Badges.ToList()[i].Id == this.user.Badges.ToList()[i].Id);
                Assert.True(userDto.Badges.ToList()[i].Title == this.user.Badges.ToList()[i].Title);
            }
        }

        [Fact]
        public void BadgeDtoTest()
        {
            var badgeDto = this.badge.AsDto();
            Assert.True(badgeDto.Id == this.badge.Id);
            Assert.True(badgeDto.Title == this.badge.Title);
        }


        [Fact]
        public void QuestDtoTest()
        {
            var questDto = this.quest.AsDto();
            Assert.True(questDto.Id == this.quest.Id);
            Assert.True(questDto.Name == this.quest.Name);
            Assert.True(questDto.Description == this.quest.Description);
            Assert.True(questDto.Points == this.quest.Points);
            Assert.True(questDto.UserId == this.quest.UserId);
        }

        [Fact]
        public void GetByIdQuestDtoTest()
        {
            var questDto = this.quest.AsGetByIdDto();
            Assert.True(questDto.Id == this.quest.Id);
            Assert.True(questDto.Name == this.quest.Name);
            Assert.True(questDto.Description == this.quest.Description);
            Assert.True(questDto.Points == this.quest.Points);
            Assert.True(questDto.Key == this.quest.Key);
            Assert.True(questDto.User == this.quest.User!.AsDto());
        }
    }
}