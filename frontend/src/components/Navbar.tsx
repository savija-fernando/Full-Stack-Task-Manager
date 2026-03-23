import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "12px" }}>
        Tasks
      </Link>
      <Link to="/add">Add Task</Link>
    </nav>
  );
}

export default Navbar;