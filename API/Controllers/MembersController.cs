using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


[ApiController]
[Route("api/[controller]")]
public class MembersController(AppDbContext context) : Controller
{
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
    {
        var members = await context.User.ToListAsync();
        return Ok(members);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AppUser>> GetMember(string id)
    {
        var member = await context.User.FindAsync(id);
        if (member == null) return NotFound();
        return Ok(member);
    }
}

