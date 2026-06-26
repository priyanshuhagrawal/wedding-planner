import AdminLayout from "../layouts/AdminLayout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AdminDashboard() {

  const [
    weddingRequests,
    setWeddingRequests,
  ] = useState([]);

  useEffect(() => {
    fetchWeddings();
  }, []);

  const fetchWeddings = async () => {
    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          "https://wedding-planner-3cid.onrender.com/api/weddings",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      console.log(
        "Wedding Data:",
        response.data
      );

      setWeddingRequests(
        response.data
      );

    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (
    id,
    newStatus
  ) => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.patch(
        `https://wedding-planner-3cid.onrender.com/api/weddings/${id}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchWeddings();

    } catch (error) {
      console.log(error);
    }
  };

  const totalRequests =
    weddingRequests.length;

  const pendingRequests =
    weddingRequests.filter(
      (r) =>
        r.status === "Pending"
    ).length;

  const completedRequests =
    weddingRequests.filter(
      (r) =>
        r.status === "Completed"
    ).length;

  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>

      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card custom-card p-4">
            <h4 className="text-muted">
  Total Weddings
</h4>

<h2>{totalRequests}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card custom-card p-4">
            <h4 className="text-muted">Pending</h4>
            <h2>{pendingRequests}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card custom-card p-4">
            <h4 className="text-muted">Completed</h4>
            <h2>{completedRequests}</h2>
          </div>
        </div>

      </div>

      <hr />

<h2>Wedding Requests</h2>

<table className="table table-bordered mt-3">
  <thead>
    <tr>
      <th>Bride</th>
      <th>Groom</th>
      <th>Date</th>
      <th>Total Cost</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    {weddingRequests.map((request) => (
      <tr key={request._id}>
        <td>{request.brideName}</td>
        <td>{request.groomName}</td>
        <td>{request.weddingDate}</td>
        {/* <td>₹ {request.budget}</td> */}
        <td>
  ₹ {request.totalAmount?.toLocaleString()}
</td>
        <td>
  <span
    className={`badge ${
      request.status === "Approved"
        ? "bg-success"
        : request.status === "Rejected"
        ? "bg-danger"
        : request.status === "Completed"
        ? "bg-primary"
        : request.status === "In Progress"
        ? "bg-warning text-dark"
        : "bg-secondary"
    }`}
  >
    {request.status}
  </span>
</td>

        <td>

            <Link
    to={`/admin/request/${request._id}`}
    className="btn btn-info btn-sm me-2"
  >
    View
  </Link>

  <button
    className="btn btn-success btn-sm me-1"
    onClick={() =>
      updateStatus(
        request._id,
        "Approved"
      )
    }
  >
    Approve
  </button>

  <button
    className="btn btn-warning btn-sm me-1"
    onClick={() =>
      updateStatus(
        request._id,
        "In Progress"
      )
    }
  >
    Progress
  </button>

  <button
    className="btn btn-primary btn-sm me-1"
    onClick={() =>
      updateStatus(
        request._id,
        "Completed"
      )
    }
  >
    Complete
  </button>

  <button
    className="btn btn-danger btn-sm"
    onClick={() =>
      updateStatus(
        request._id,
        "Rejected"
      )
    }
  >
    Reject
  </button>
</td>
      </tr>
    ))}
  </tbody>
</table>

    </AdminLayout>
  );
}

export default AdminDashboard;