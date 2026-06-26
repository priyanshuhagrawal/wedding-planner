import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

function AdminRequestDetails() {
    alert("Request Details Page Loaded");
  const { id } = useParams();
console.log("Route ID:", id);
  const [request, setRequest] =
    useState(null);

  useEffect(() => {
    fetchRequest();
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
              Authorization:
                `Bearer ${token}`,
            },
          }
        );
        console.log("All Requests:", response.data);

      const selectedRequest =
        response.data.find(
          (item) => item._id === id
        );
        console.log(
  "Selected Request:",
  selectedRequest
);

      setRequest(selectedRequest);

    } catch (error) {
      console.log(error);
    }
  };

  if (!request) {
    return (
      <AdminLayout>
        <h3>Loading...</h3>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="card custom-card p-4">

        <h2 className="mb-4">
          Wedding Request Details
        </h2>

        <p>
          <strong>Bride:</strong>{" "}
          {request.brideName}
        </p>

        <p>
          <strong>Groom:</strong>{" "}
          {request.groomName}
        </p>

        <p>
          <strong>Wedding Date:</strong>{" "}
          {request.weddingDate}
        </p>

        <p>
          <strong>Venue:</strong>{" "}
          {request.venue}
        </p>

        <p>
          <strong>Guest Count:</strong>{" "}
          {request.guestCount}
        </p>

        <p>
          <strong>Total Amount:</strong>{" "}
          ₹ {request.totalAmount}
        </p>

        <hr />

        <h4>Catering</h4>

        {request.catering && (
          <>
            <p>
              {request.catering.packageName}
            </p>

            <p>
              {request.catering.description}
            </p>

            <p>
              ₹ {request.catering.price}
            </p>
          </>
        )}

        <hr />

        <h4>Photographer</h4>

        {request.photographer && (
          <>
            <p>
              {
                request.photographer
                  .packageName
              }
            </p>

            <p>
              {
                request.photographer
                  .description
              }
            </p>

            <p>
              ₹{" "}
              {
                request.photographer
                  .price
              }
            </p>
          </>
        )}

        <hr />

        <h4>Decoration</h4>

        {request.decoration && (
          <>
            <p>
              {
                request.decoration
                  .packageName
              }
            </p>

            <p>
              {
                request.decoration
                  .description
              }
            </p>

            <p>
              ₹{" "}
              {
                request.decoration
                  .price
              }
            </p>
          </>
        )}

        <hr />

        <h4>
          Status:
          {" "}
          {request.status}
        </h4>

      </div>
    </AdminLayout>
  );
}

export default AdminRequestDetails;