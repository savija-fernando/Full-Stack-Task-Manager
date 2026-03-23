import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTask, getTasks } from "../services/taskService";
import type { Task } from "../types/task";

function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <p style={{ padding: "16px" }}>Loading...</p>;

  return (
    <div style={{ padding: "16px" }}>
      <h1>Task List</h1>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "8px",
            }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>

            <Link to={`/edit/${task.id}`} style={{ marginRight: "12px" }}>
              Edit
            </Link>

            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskListPage;