import { Link } from "react-router-dom";
import { useState } from "react";


  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");

  window.location.href = "/login";
};

  
function Navbar() {
    const [showMenu, setShowMenu] =
  useState(false);
    const role =
  localStorage.getItem("role");
  return (
    <nav
  className="navbar navbar-expand-lg navbar-dark"
  style={{
    background:
      "linear-gradient(135deg,#ff4d6d,#ff758f)",
    padding: "15px 40px",
    boxShadow:
      "0 3px 12px rgba(0,0,0,0.1)",
      
  }}
>
      <h3
  style={{
    color: "white",
    fontWeight: "700",
    margin: 0,
  }}
>
  💍 Wedding Planner
</h3>
      <div
  className="d-flex align-items-center"
></div >
       <div className="ms-auto d-flex align-items-center">
        <Link
  to="/home"
  style={{
    color: "white",
    marginRight: "20px",
    fontWeight: "500",
  }}
>
  Home
</Link>

        <Link
          to="/gallery"
          style={{
  color: "white",
  marginRight: "20px",
  fontWeight: "500",
}}
        >
          Gallery
        </Link>

                {
        role === "admin" && (
            <Link to="/admin"
            style={{
  color: "white",
  marginRight: "20px",
  fontWeight: "500",
}}>
            Admin Dashboard
            </Link>
        )
        }
                {
        role === "user" && (
            <Link to="/planner"
            style={{
  color: "white",
  marginRight: "20px",
  fontWeight: "500",
}}>
            Plan Wedding
            </Link>
        )
        }
                {
        role === "user" && (
            <Link to="/dashboard"
            style={{
  color: "white",
  marginRight: "20px",
  fontWeight: "500",
}}>
            User Dashboard
            </Link>
        )
        }

        {/* <Link
          to="/planner"
          style={{ color: "white", marginRight: "15px" }}
        >
          Plan Wedding
        </Link> */}
        {/* <Link
          to="/login"
          style={{ color: "white", marginRight: "15px" }}
        >
          Login
        </Link> */}

        
  {/* {
  !role ? (
    <Link
      to="/login"
      className="btn btn-primary"
    >
      Login
    </Link>
  ) : (
    <div
  onClick={handleLogout}
  className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
  style={{
    width: "40px",
    height: "40px",
    cursor: "pointer",
  }}
>
  {role === "admin"
    ? "👤"
    : "🧑"}
</div>
  )
} */}

<div
  style={{
    position: "relative",
  }}
>

  <div
    onClick={() =>
      setShowMenu(!showMenu)
    }
    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
    style={{
      width: "40px",
      height: "40px",
      cursor: "pointer",
      fontSize: "20px",
    }}
  >
    👤
  </div>

  {showMenu && (

    <div
      className="card"
      style={{
        position: "absolute",
        right: 0,
        top: "50px",
        width: "180px",
        zIndex: 999,
      }}
    >

      {role === "user" && (

        <button
          className="btn btn-light text-start"
          onClick={() =>
            window.location.href =
              "/dashboard"
          }
        >
          Dashboard
        </button>

      )}

      {role === "admin" && (

        <button
          className="btn btn-light text-start"
          onClick={() =>
            window.location.href =
              "/admin"
          }
        >
          Admin Panel
        </button>

      )}

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  )}

</div>
      
      </div>
    </nav>
  );
}

export default Navbar;