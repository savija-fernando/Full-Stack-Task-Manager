import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";

function AddTaskPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending" as "Pending" | "Completed",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createTask(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <textarea
            name="description"
            placeholder="Description"
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

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default AddTaskPage;