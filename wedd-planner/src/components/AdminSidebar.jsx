import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Admin Panel</h2>

      <hr />

      <Link
        to="/admin"
        style={{
          color: "white",
          display: "block",
          marginBottom: "15px",
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/admin/catering"
        style={{
          color: "white",
          display: "block",
          marginBottom: "15px",
        }}
      >
        Catering
      </Link>

      <Link
        to="/admin/photographers"
        style={{
          color: "white",
          display: "block",
          marginBottom: "15px",
        }}
      >
        Photographers
      </Link>

      <Link
        to="/admin/decorations"
        style={{
          color: "white",
          display: "block",
          marginBottom: "15px",
        }}
      >
        Decorations
      </Link>

      {/* <Link
        to="/admin/mandaps"
        style={{
          color: "white",
          display: "block",
        }}
      >
        Mandaps
      </Link> */}
    </div>
  );
}

export default AdminSidebar;