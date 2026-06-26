function ServiceCard({
  title,
  description,
  price,
  image,
  selected,
  onClick,
}) {
  return (
    <div
      className="col-md-4 mb-4"
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      <div
        className={`package-card ${
          selected
            ? "border border-success border-4"
            : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="package-image"
        />

        <div className="package-body">

          <h4 className="package-title">
            {title}
          </h4>

          <p className="package-description">
            {description}
          </p>

          <div className="package-price">
            ₹ {price}
          </div>

          {selected && (
            <div className="mt-3">
              <span className="badge bg-success">
                Selected
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ServiceCard;