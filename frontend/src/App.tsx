import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskListPage from "./pages/TaskListPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;