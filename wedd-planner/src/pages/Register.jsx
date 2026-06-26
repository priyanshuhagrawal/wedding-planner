import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] =
  useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

    role: "user",

    adminSecret: "",
  });


  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  try {
    
      await axios.post(
  "https://wedding-planner-3cid.onrender.com/api/auth/register",
  {
    name:
      formData.name,

    email:
      formData.email,

    password:
      formData.password,

    role:
      formData.role,

    adminSecret:
      formData.adminSecret,
  }
);

    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data
        ?.message ||
        "Registration Failed"
    );
  }
};

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow mx-auto"
        style={{ maxWidth: "450px" }}
      >
        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
  <label>
    Register As
  </label>

  <select
    className="form-control"
    name="role"
    value={formData.role}
    onChange={handleChange}
  >
    <option value="user">
      User
    </option>

    <option value="admin">
      Admin
    </option>
  </select>
</div>

{
  formData.role === "admin" && (
    <div className="mb-3">
      <label>
        Admin Secret Key
      </label>

      <input
        type="password"
        className="form-control"
        name="adminSecret"
        value={formData.adminSecret}
        onChange={handleChange}
      />
    </div>
  )
}

<div className="mb-3">
  <label>Password</label>

  <input
    type="password"
    className="form-control"
    name="password"
    value={formData.password}
    onChange={handleChange}
  />
</div>
          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>

            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-success w-100"
            type="submit"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;