import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { useContext} from "react";

import {
  WeddingContext,
} from "../context/WeddingContext";

function ManageMandaps() {
 const {
  mandaps,
  setMandaps,
} = useContext(WeddingContext);

  const [packageName, setPackageName] =
  useState("");

const [description, setDescription] =
  useState("");

const [image, setImage] =
  useState("");

const [price, setPrice] =
  useState("");

  const addPackage = () => {
    const newPackage = {
  id: Date.now(),
  packageName,
  description,
  image,
  price,
};

    setMandaps([
  ...mandaps,
  newPackage,
]);

    setPackageName("");
setDescription("");
setImage("");
setPrice("");
  };

  return (
    <AdminLayout>
      <h2>Manage Mandaps</h2>

      <input
        className="form-control mb-2"
        placeholder="Package Name"
        value={packageName}
        onChange={(e) =>
          setPackageName(e.target.value)
        }
      />

      <input
  className="form-control mb-2"
  placeholder="Description"
  value={description}
  onChange={(e) =>
    setDescription(e.target.value)
  }
/>

<input
  className="form-control mb-2"
  placeholder="Image URL"
  value={image}
  onChange={(e) =>
    setImage(e.target.value)
  }
/>

      <input
        className="form-control mb-2"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <button
        className="btn btn-primary"
        onClick={addPackage}
      >
        Add Package
      </button>

      <hr />

{mandaps.map((pkg) => (
  <div
    key={pkg.id}
    className="card p-3 mb-3"
  >
    <img
      src={pkg.image}
      alt={pkg.packageName}
      style={{
        height: "200px",
        objectFit: "cover",
      }}
    />

    <h4 className="mt-3">
      {pkg.packageName}
    </h4>

    <p>{pkg.description}</p>

    <h5>₹ {pkg.price}</h5>

    <button
      className="btn btn-danger"
      onClick={() => {
        const updatedPackages =
          mandaps.filter(
            (item) =>
              item.id !== pkg.id
          );

        setMandaps(
          updatedPackages
        );
      }}
    >
      Delete
    </button>
  </div>
))}
    </AdminLayout>
  );
}

export default ManageMandaps;