import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { useContext} from "react";
import "../styles/adminPackages.css";

import {
  WeddingContext,
} from "../context/WeddingContext";

function ManageDecorations() {
 const {
  decorations,
  setDecorations,
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

    setDecorations([
  ...decorations,
  newPackage,
]);

    setPackageName("");
setDescription("");
setImage("");
setPrice("");
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">
  Manage Decoration Packages
</h2>

<div className="admin-form-card">

  <input
    className="form-control mb-3"
    placeholder="Package Name"
    value={packageName}
    onChange={(e) =>
      setPackageName(e.target.value)
    }
  />

  <textarea
    className="form-control mb-3"
    placeholder="Description"
    rows="3"
    value={description}
    onChange={(e) =>
      setDescription(e.target.value)
    }
  />

  <input
    className="form-control mb-3"
    placeholder="Image URL"
    value={image}
    onChange={(e) =>
      setImage(e.target.value)
    }
  />

  <input
    className="form-control mb-3"
    placeholder="Price"
    type="number"
    value={price}
    onChange={(e) =>
      setPrice(e.target.value)
    }
  />

  <button
    className="btn btn-success"
    onClick={addPackage}
  >
    Add Decoration Package
  </button>

</div>

<div className="package-grid">

  {decorations.map((pkg) => (

    <div
      key={pkg.id}
      className="package-card"
    >

      <img
        src={pkg.image}
        alt={pkg.packageName}
        className="package-image"
      />

      <div className="package-body">

        <h4 className="package-title">
          {pkg.packageName}
        </h4>

        <p className="package-description">
          {pkg.description}
        </p>

        <div className="package-price">
          ₹ {pkg.price}
        </div>

        <button
          className="btn btn-danger delete-btn"
          onClick={() => {

            const updatedPackages =
              decorations.filter(
                (item) =>
                  item.id !== pkg.id
              );

            setDecorations(
              updatedPackages
            );
          }}
        >
          Delete Package
        </button>

      </div>

    </div>

  ))}

</div>
    </AdminLayout>
  );
}

export default ManageDecorations;