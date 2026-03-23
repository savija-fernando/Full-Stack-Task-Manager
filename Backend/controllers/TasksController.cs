using Backend.DTOs;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

//defining the API
[ApiController]
[Route("api/[controller]")]

public class TasksController : ControllerBase
{
    private readonly ITaskService _taskService;

    public TasksController(ITaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var tasks = await _taskService.GetAllAsync();
        return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var task = await _taskService.GetByIdAsync(id);
        if (task == null) return NotFound();

        return Ok(task);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateTaskDto dto)
    {
        if(string.IsNullOrWhiteSpace(dto.Title))
            return BadRequest("Title is required");
        
        if(dto.Status !="Pending" && dto.Status !="Completed")
            return BadRequest("Status must be Pending or Completed");

        var createdTask = await _taskService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new{ id=createdTask.Id}, createdTask);

    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateTaskDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Title))
            return BadRequest("Title is required.");

        if (dto.Status != "Pending" && dto.Status != "Completed")
            return BadRequest("Status must be Pending or Completed.");

        var updated = await _taskService.UpdateAsync(id, dto);
        if (!updated) return NotFound();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _taskService.DeleteAsync(id);
        if (!deleted) return NotFound();

        return NoContent();
    }

    
}