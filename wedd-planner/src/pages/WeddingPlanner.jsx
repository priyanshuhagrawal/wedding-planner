
import { useState } from "react";
import UserLayout from "../layouts/UserLayout";
// import cateringData from "../data/cateringData";
//import ServiceCard from "../components/ServiceCard";

import { useContext } from "react";
import { WeddingContext } from "../context/WeddingContext";
import axios from "axios";
function WeddingPlanner() {
  const [step, setStep] = useState(1);

  const [weddingData, setWeddingData] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    venue: "",
    guestCount: "",
   // budget: "",

    catering: "",
    photographer: "",
    decoration: "",
    mandap: "",
  });

  const {
  cateringPackages,
  photographers,
  decorations,
} = useContext(WeddingContext);

const submitWeddingPlan =
  async () => {
    try {
      const token =
        localStorage.getItem(
          "token"
        );
console.log({
  brideName: weddingData.brideName,
  groomName: weddingData.groomName,
  weddingDate: weddingData.weddingDate,
  venue: weddingData.venue,
  guestCount: Number(
    weddingData.guestCount
  ),
  totalAmount: totalCost,
  catering: weddingData.catering,
  photographer:
    weddingData.photographer,
  decoration:
    weddingData.decoration,
});

console.log("TOKEN:", token);
      const response =
        await axios.post(
          "https://wedding-planner-3cid.onrender.com/api/weddings",
          {
    brideName: weddingData.brideName,
    groomName: weddingData.groomName,
    weddingDate: weddingData.weddingDate,
    venue: weddingData.venue,

     guestCount:
              Number(
                weddingData.guestCount
              ),
              totalAmount: totalCost,
    //budget: weddingData.budget,
        
    catering: weddingData.catering,
    photographer: weddingData.photographer,
    decoration: weddingData.decoration,
   // mandap: weddingData.mandap,
    
    // status: "Pending",
    // createdAt: new Date(),
  },
   {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      console.log(
        response.data
      );

      alert(
        "Wedding Request Submitted!"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Unable to submit wedding request"
      );
    }
  };

//   setWeddingRequests([
//     ...weddingRequests,
//     newRequest,
//   ]);

 

  const handleChange = (e) => {
    setWeddingData({
      ...weddingData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
//   const totalCost =
//   (Number(weddingData.guestCount || 0) *
//     Number(
//       weddingData.catering?.price || 0
//     )) +
//   Number(
//     weddingData.photographer?.price || 0
//   ) +
//   Number(
//     weddingData.decoration?.price || 0
//   );
  const cateringCost =
  Number(
    weddingData.catering?.price || 0
  ) *
  Number(
    weddingData.guestCount || 0
  );

const photographerCost =
  Number(
    weddingData.photographer?.price || 0
  );

const decorationCost =
  Number(
    weddingData.decoration?.price || 0
  );

const totalCost =
  cateringCost +
  photographerCost +
  decorationCost;

  const NavigationButtons = () => (
  <div className="d-flex justify-content-between align-items-center mt-4">
    {step > 1 ? (
      <button
        className="btn btn-outline-secondary px-4 py-2"
        onClick={prevStep}
      >
        ← Previous
      </button>
    ) : (
      <div></div>
    )}

    {step < 6 ? (
      <button
        className="btn btn-primary px-5 py-2"
        onClick={nextStep}
      >
        Next →
      </button>
    ) : (
      <button
        className="btn btn-success px-5 py-2"
        onClick={submitWeddingPlan}
      >
        Submit Request
      </button>
    )}
  </div>
);

  return (
    <UserLayout>
      <div className="container">
        <h2 className="mb-4">Wedding Planner</h2>

        <h5>Step {step} of 6</h5>

        {
  step === 1 && (
    <div className="card p-4">
      <h4>Wedding Details</h4>

      <div className="mb-3">
        <label>Bride Name</label>
        <input
          type="text"
          className="form-control"
          name="brideName"
          value={weddingData.brideName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Groom Name</label>
        <input
          type="text"
          className="form-control"
          name="groomName"
          value={weddingData.groomName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Wedding Date</label>
        <input
          type="date"
          className="form-control"
          name="weddingDate"
          value={weddingData.weddingDate}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Venue</label>
        <input
          type="text"
          className="form-control"
          name="venue"
          value={weddingData.venue}
          onChange={handleChange}
        />
      </div>

      <NavigationButtons />
    </div>
  )
}

{
  step === 2 && (
    <div className="card p-4">
      <h4>Guest Details</h4>

      <div className="mb-3">
        <label>Guest Count</label>

        <input
          type="number"
          className="form-control"
          name="guestCount"
          value={weddingData.guestCount}
          onChange={handleChange}
        />
      </div>

      {/* <div className="mb-3">
        <label>Budget</label>

        <input
          type="number"
          className="form-control"
          name="budget"
          value={weddingData.budget}
          onChange={handleChange}
        />
      </div> */}

      <NavigationButtons />

    
    </div>
  )
}

{
  step === 3 && (
    <div className="card p-4">
      <h4>Select Catering</h4>

      <div className="d-flex flex-wrap">
  <div className="row">
  {cateringPackages.length === 0 ? (
    <h5>
      No Catering Packages Added By Admin
    </h5>
  ) : (
    cateringPackages.map((item) => (
      <div
        key={item.id}
        className="col-md-4 mb-3"
      >
        <div
          className={`card h-100 ${
            weddingData.catering?.id === item.id
              ? "border border-success border-3"
              : ""
          }`}
          style={{
            cursor: "pointer",
          }}
          onClick={() =>
            setWeddingData({
              ...weddingData,
              catering:
                item,
            })
          }
        >
          <img
            src={item.image}
            alt={item.packageName}
            className="package-image"
            style={{
                width: "100%",
              height: "250px",
              
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h5>
              {item.packageName}
            </h5>

            <p>
              {item.description}
            </p>

            <h6>
              ₹ {item.price} / Plate
            </h6>
          </div>
        </div>
      </div>
    ))
  )}
</div>
    
</div>

      <NavigationButtons />

     
    </div>
  )
}

{
  step === 4 && (
    <div className="card p-4">
      <h4>Select Photographer</h4>

      <div className="row">
        {photographers.map((item) => (
          <div
            key={item.id}
            className="col-md-4 mb-3"
          >
            <div
              className={`card h-100 ${
                weddingData.photographer?.id === item.id
                  ? "border border-success border-3"
                  : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() =>
                setWeddingData({
                  ...weddingData,
                  photographer: item,
                })
              }
            >
              <img
                src={item.image}
                alt={item.packageName}
                className="package-image"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5>{item.packageName}</h5>

                <p>{item.description}</p>

                <h6>₹ {item.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NavigationButtons />

      <button
        className="btn btn-primary"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  )
}

{
  step === 5 && (
    <div className="card p-4">
      <h4>Decoration and Mandap</h4>

      <div className="row mb-4">
  {decorations.map((item) => (
    <div
      key={item.id}
      className="col-md-4 mb-3"
    >
      <div
        className={`card h-100 ${
          weddingData.decoration?.id === item.id
            ? "border border-success border-3"
            : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() =>
          setWeddingData({
            ...weddingData,
            decoration: item,
          })
        }
      >
        <img
          src={item.image}
          alt={item.packageName}
          className="package-image"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <h5>{item.packageName}</h5>
          <p>{item.description}</p>
          <h6>₹ {item.price}</h6>
        </div>
      </div>
    </div>
  ))}
</div>

     

     <NavigationButtons />
    </div>
  )
}

{
  step === 6 && (
    <div className="card p-4">
      <h3>Wedding Summary</h3>

      <p>
        Bride: {weddingData.brideName}
      </p>

      <p>
        Groom: {weddingData.groomName}
      </p>

      <p>
        Venue: {weddingData.venue}
      </p>

      <p>
        Guests: {weddingData.guestCount}
      </p>

      {/* <p>
        Budget: ₹{weddingData.budget}
      </p> */}

      <p>
  Catering:
  {" "}
  {weddingData.catering
    ?.packageName}
</p>

     <p>
 Photographer:
 {" "}
 {weddingData.photographer?.packageName}
</p>

<p>
 Decoration:
 {" "}
 {weddingData.decoration?.packageName}
</p>
      {/* <p>
        Mandap: {weddingData.mandap}
      </p> */}

      {/* <div className="card p-3 my-3 bg-light">
  <h4>Cost Breakdown</h4>

  <p>
    Catering:
    ₹ {cateringCost.toLocaleString()}
  </p>

  <p>
    Photography:
    ₹ {photographerCost.toLocaleString()}
  </p>

  <p>
    Decoration:
    ₹ {decorationCost.toLocaleString()}
  </p>

  <hr />

  <h3>
    Total:
    ₹ {totalCost.toLocaleString()}
  </h3>
</div> */}

      <div className="alert alert-success">
  <h4>
    Estimated Wedding Cost
  </h4>

  <h2>
    ₹ {totalCost.toLocaleString()}
  </h2>
</div>

      {/* <button
        className="btn btn-secondary me-2"
        onClick={prevStep}
      >
        Previous
      </button>

      <button
        className="btn btn-success"
        
          onClick={submitWeddingPlan}
        
      >
        Submit Plan
      </button> */}
      <NavigationButtons />
    </div>
  )
}

      </div>
    </UserLayout>
  );
}

export default WeddingPlanner;