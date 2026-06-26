import React from "react";
import img1 from "../assests/images/1.jpg";
import img2 from "../assests/images/2.jpg";
import img3 from "../assests/images/3.jpg";
import img4 from "../assests/images/4.jpeg";
import img5 from "../assests/images/5.jpg";
import img6 from "../assests/images/6.jpg";


function Gallery() {
  const galleryImages = [
  {
    id: 1,
    image: img1,
    title: "Royal Wedding",
  },
  {
    id: 2,
    image: img2,
    title: "Wedding Decoration",
  },
  {
    id: 3,
    image: img3,
    title: "Couple Shoot",
  },
  {
    id: 4,
    image: img4,
    title: "Mandap Setup",
  },
  {
    id: 5,
    image: img5,
    title: "Wedding Stage",
  },
  {
    id: 6,
    image: img6,
    title: "Reception Night",
  },
];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Our Wedding Gallery
      </h1>

      <div className="row">
        {galleryImages.map((img) => (
          <div
            className="col-md-4 mb-4"
            key={img.id}
          >
            <div className="card custom-card h-100">
              <img
                src={img.image}
                alt={img.title}
                style={{
  height: "300px",
  objectFit: "cover",
}}
              />

              <div className="card-body text-center">
                <h5>{img.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;