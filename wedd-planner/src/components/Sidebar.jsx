import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#222",
        color: "white",
        padding: "20px"
      }}
    >
      <h3>Wedding Planner</h3>

      <hr />

      <ul
        style={{
          listStyle: "none",
          padding: 0
        }}
      >
        <li>
          <Link
            to="/dashboard"
            style={{ color: "white" }}
          >
            Dashboard
          </Link>
        </li>

        <br />

        <li>
          <Link
            to="/planner"
            style={{ color: "white" }}
          >
            Plan Wedding
          </Link>
        </li>

        <br />

        <li>
          <Link
            to="/gallery"
            style={{ color: "white" }}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;