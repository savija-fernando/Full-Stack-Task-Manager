import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../services/taskService";

function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending" as "Pending" | "Completed",
  });

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;

      try {
        const task = await getTaskById(Number(id));
        setFormData({
          title: task.title,
          description: task.description,
          status: task.status,
        });
      } catch (error) {
        console.error("Failed to fetch task:", error);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      await updateTask(Number(id), formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>Edit Task</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTaskPage;