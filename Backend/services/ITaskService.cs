using Backend.DTOs;

namespace Backend.Services;

public interface ITaskService
{
    Task<List<TaskResponseDto>>GetAllAsync();
    Task<TaskResponseDto?> GetByIdAsync(int id);
    Task<TaskResponseDto> CreateAsync(CreateTaskDto dto);
    Task<bool> UpdateAsync(int id, UpdateTaskDto dto);
    Task<bool> DeleteAsync(int id);

}