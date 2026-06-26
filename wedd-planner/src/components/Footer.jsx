function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        //marginTop: "60px",
      }}
    >
      <div className="container py-5">

        <div className="row">

          <div className="col-md-4">
            <h4>💍 Wedding Planner</h4>

            <p>
              Plan your dream wedding with
              customized catering,
              photography and decoration
              services.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>Home</li>
              <li>Gallery</li>
              <li>Plan Wedding</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>

            <p>📧 info@weddingplanner.com</p>

            <p>📞 +91 9767883636</p>

            <p>Pune, Maharashtra</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 Wedding Planner

          <br />

          Created by Priyanshu
        </div>

      </div>
    </footer>
  );
}

export default Footer;