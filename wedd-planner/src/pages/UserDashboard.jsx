//import { useContext } from "react";
import UserLayout from "../layouts/UserLayout";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function UserDashboard() {

  const [
    weddingRequests,
    setWeddingRequests,
  ] = useState([]);

  useEffect(() => {
    fetchMyWeddings();
  }, []);

  const fetchMyWeddings =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(
            "https://wedding-planner-3cid.onrender.com/api/weddings/my",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setWeddingRequests(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  const pendingRequests =
    weddingRequests.filter(
      (req) => req.status === "Pending"
    ).length;

  const approvedRequests =
    weddingRequests.filter(
      (req) => req.status === "Approved"
    ).length;

  return (
    <UserLayout>
      <h2 className="mb-4">
        My Dashboard
      </h2>

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card custom-card p-4">
            <h5>Total Requests</h5>
            <h3>
              {weddingRequests.length}
            </h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card custom-card p-4">
            <h5>Pending</h5>
            <h3>
              {pendingRequests}
            </h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card custom-card p-4">
            <h5>Approved</h5>
            <h3>
              {approvedRequests}
            </h3>
          </div>
        </div>

      </div>

      <div className="card custom-card p-4">
        <h4>My Wedding Requests</h4>

        {weddingRequests.length === 0 ? (
          <p>
            No requests submitted yet.
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
  <th>Bride</th>
  <th>Groom</th>
  <th>Date</th>
  <th>Total Amount</th>
  <th>Status</th>
</tr>
            </thead>

            <tbody>
              {weddingRequests.map(
                (request) => (
                  <tr key={request._id}>
                    <td>
                      {request.brideName}
                    </td>

                    <td>
                      {request.groomName}
                    </td>

                    <td>
                      {request.weddingDate}
                    </td>

                    <td>
  ₹ {request.totalAmount}
</td>

<td>
  {request.status}
</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </UserLayout>
  );
}

export default UserDashboard;