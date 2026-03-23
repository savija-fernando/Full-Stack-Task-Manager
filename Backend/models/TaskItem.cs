namespace backend.Models;

public class TaskItem
{
    public int Id { get; set;}
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Status { get; set; } = "Pending"; // Pending / Completed
    public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
}