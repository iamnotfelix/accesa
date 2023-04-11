using accesa.Dtos.Quests;
using accesa.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using accesa.Repositories;

namespace accesa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestsController : ControllerBase
    {
        private readonly DatabaseContext context;

        public QuestsController(DatabaseContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<QuestDto>> GetQuests()
        {
            var quests = this.context.Quests.ToList();

            if (quests is null) 
            {
                return NotFound("Quests not found.");
            }

            return Ok(quests.Select(quest => quest.AsDto()));
        }

        [HttpGet("{id}")]
        public ActionResult<GetByIdQuestDto> GetQuest(Guid id)
        {
            var quest = this.context.Quests
                .Include(q => q.User)
                .ToList()
                .Find(u => u.Id == id);

            if (quest is null)
            {
                return NotFound("Quest not found.");
            }

            return Ok(quest.AsGetByIdDto());
        }

        [HttpPost]
        public ActionResult<QuestDto> CreateQuest(CreateQuestDto quest)
        {
            var user = this.context.Users.Find(quest.UserId);
            if (user is null)
            {
                return NotFound("User not found.");
            }

            // Check the points of the user that creates the quest that he has enough points;
            if (user.Points < quest.Points)
            {
                return ValidationProblem("Not enough points to create this quest.");
            }

            // Decrease creator's points;
            user.Points -= quest.Points; 

            var actualQuest = new Quest() {
                Id = Guid.NewGuid(),
                Name = quest.Name,
                Description = quest.Description,
                Points = quest.Points,
                Key = quest.Key,
                UserId = quest.UserId
            };


            this.context.Quests.Add(actualQuest);
            this.context.SaveChanges();

            return Ok(actualQuest.AsDto());
        }

        [HttpPut("{id}")]
        public ActionResult UpdateQuest(Guid id, UpdateQuestDto entity) 
        {
            var quest = this.context.Quests.Find(id);
            if (quest is null)
            {
                return NotFound("Quest not found.");
            }

            var user = this.context.Users.Find(quest.UserId);
            if (user is null)
            {
                return NotFound("User not found.");
            }

            // Actual points of the user before decreasing the points of the quest;
            int initialPoints = quest.Points + user.Points;
            if (initialPoints < entity.Points)
            {
                return ValidationProblem("Not enough points to update this quest.");
            }

            // Decrease creator's points;
            user.Points = initialPoints - entity.Points;

            quest.Name = entity.Name;
            quest.Description = entity.Description;
            quest.Points = entity.Points;
            quest.Key = entity.Key;

            this.context.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}/{key}")]
        public ActionResult DeleteQuest(Guid id, string key)
        {
            var quest = this.context.Quests.Find(id);
            if (quest is null)
            {
                return NotFound("Quest not found.");
            }

            if (quest.Key != key)
            {
                return ValidationProblem("Quest cannot be solved, the key does not correspond.");
            }

            this.context.Quests.Remove(quest);
            this.context.SaveChanges();

            return Ok();
        }
    }
}