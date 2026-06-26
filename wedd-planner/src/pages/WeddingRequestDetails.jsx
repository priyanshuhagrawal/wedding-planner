import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

// import {
//   WeddingContext,
// } from "../context/WeddingContext";

function WeddingRequestDetails() {
const { id } = useParams();

const [request, setRequest] =
  useState(null);

useEffect(() => {
  fetchRequest();
  // eslint-disable-next-line
}, []);

const fetchRequest = async () => {
  try {
    const token =
      localStorage.getItem("token");

    const response =
      await axios.get(
        "https://wedding-planner-3cid.onrender.com/api/weddings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    const selected =
      response.data.find(
        (item) => item._id === id
      );

    setRequest(selected);

  } catch (error) {
    console.log(error);
  }
};

  if (!request) {
  return (
    <AdminLayout>
      <h2>Loading...</h2>
    </AdminLayout>
  );
}

  return (
    <AdminLayout>
      <h1>Wedding Request Details</h1>

      <div className="container mt-4">

  <div className="card p-4 shadow">

    <h2 className="mb-4">
      Wedding Request Details
    </h2>

    <h4>Couple Information</h4>

    <p>
      <strong>Bride:</strong>{" "}
      {request.brideName}
    </p>

    <p>
      <strong>Groom:</strong>{" "}
      {request.groomName}
    </p>

    <p>
      <strong>Date:</strong>{" "}
      {request.weddingDate}
    </p>

    <p>
      <strong>Venue:</strong>{" "}
      {request.venue}
    </p>

    <hr />

    <h4>Wedding Planning</h4>

    <p>
      <strong>Guests:</strong>{" "}
      {request.guestCount}
    </p>

    <p>
      <strong>Catering:</strong>{" "}
      {request.catering?.packageName}
    </p>
    <img
  src={request.catering?.image}
  alt=""
  className="img-fluid rounded mb-3"
  style={{
    maxHeight: "250px",
    maxWidth: "50%",
    objectFit: "cover",
  }}
/>

    <p>
      <strong>Photography:</strong>{" "}
      {request.photographer?.packageName}
    </p>
    <img
  src={request.photographer?.image}
  alt=""
  className="img-fluid rounded mb-3"
  style={{
    maxHeight: "250px",
    maxWidth: "50%",
    objectFit: "cover",
  }}
/>

    <p>
      <strong>Decoration:</strong>{" "}
      {request.decoration?.packageName}
    </p>
    <img
  src={request.decoration?.image}
  alt=""
  className="img-fluid rounded mb-3"
  style={{
    maxHeight: "250px",
    maxWidth: "50%",
    objectFit: "cover",
  }}
/>

    <hr />

    <h4>Pricing</h4>

    <p>
      <strong>Total Cost:</strong>
      ₹ {request.totalAmount}
    </p>
    <div className="card p-3 bg-light mt-3">

  <h5>Cost Breakdown</h5>

  <p>
    Catering:
    ₹
    {(Number(
      request.catering?.price || 0
    ) *
      Number(
        request.guestCount || 0
      ))
      .toLocaleString()}
  </p>

  <p>
    Photography:
    ₹
    {Number(
      request.photographer?.price || 0
    ).toLocaleString()}
  </p>

  <p>
    Decoration:
    ₹
    {Number(
      request.decoration?.price || 0
    ).toLocaleString()}
  </p>

</div>

    <hr />

    <h4>Status</h4>

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

  </div>

</div>

    </AdminLayout>
  );
}

export default WeddingRequestDetails;