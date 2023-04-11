using accesa.Dtos.Users;
using accesa.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using moneyManager.Repositories;

namespace accesa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DatabaseContext context;

        public UsersController(DatabaseContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UserDto>> GetUsers()
        {
            var users = this.context.Users.ToList();

            if (users is null) 
            {
                return NotFound("Users not found.");
            }

            return Ok(users.Select(user => user.AsDto()));
        }

        [HttpGet("{id}")]
        public ActionResult<GetByIdUserDto> GetUser(Guid id)
        {
            var user = this.context.Users
                .Include(u => u.Badges)
                .ToList()
                .Find(u => u.Id == id);

            if (user is null)
            {
                return NotFound("User not found.");
            }

            return Ok(user.AsGetByIdDto());
        }

        [HttpPost]
        public ActionResult<UserDto> CreateUser(CreateUserDto user)
        {
            var actualUser = new User() {
                Id = Guid.NewGuid(),
                Name = user.Name,
                Points = (user.Points <= 0 ? 5 : user.Points)
            };

            this.context.Users.Add(actualUser);
            this.context.SaveChanges();

            return Ok(actualUser.AsDto());
        }

        [HttpPut("{id}")]
        public ActionResult UpdateUser(Guid id, UpdateUserDto entity) 
        {
            var user = this.context.Users.Find(id);
            if (user is null)
            {
                return NotFound("User not found.");
            }

            user.Name = entity.Name;
            user.Points = entity.Points;

            this.context.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(Guid id)
        {
            var user = this.context.Users.Find(id);
            if (user is null)
            {
                return NotFound("User not found.");
            }

            this.context.Users.Remove(user);
            this.context.SaveChanges();

            return Ok();
        }
    }
}