import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
const navigate = useNavigate();

const [role, setRole] = useState("user");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async () => {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setError(
      "Please enter a valid email"
    );
    return;
  }

  if (!password.trim()) {
    alert("Password is required");
    return;
  }

  try {
    const response =
      await axios.post(
        "https://wedding-planner-3cid.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "role",
      response.data.user.role
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.data.user
      )
    );

    if (
      response.data.user.role ===
      "admin"
    ) {
      navigate("/admin");
    } else {
      navigate("/");
    }

    window.location.reload();
  } catch (error) {
    alert(
      error.response?.data
        ?.message ||
        "Login Failed"
    );
  }
};

return (
<div
className="container d-flex justify-content-center align-items-center"
style={{ height: "100vh" }}
>
<div
className="card p-4 shadow"
style={{ width: "400px" }}
> <h2 className="text-center mb-4">
Wedding Planner Login </h2>


    <div className="mb-3">
      <label>Email</label>

      <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      {error && (
        <small className="text-danger">
          {error}
        </small>
      )}
    </div>

    <div className="mb-3">
      <label>Password</label>

      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />
    </div>

    <div className="mb-3">
      <label>Login As</label>

      <select
        className="form-control"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >
        <option value="user">
          User
        </option>

        <option value="admin">
          Admin
        </option>
      </select>
    </div>

    <button
      className="btn btn-primary w-100"
      onClick={handleLogin}
    >
      Login
    </button>

    <div className="text-center mt-3">
      Don't have an account?

      <Link
        to="/register"
        className="ms-2"
      >
        Register Here
      </Link>
    </div>
  </div>
</div>


);
}

export default Login;
