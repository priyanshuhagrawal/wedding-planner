//import {Link} from "react-router-dom";

import "../styles/home.css";
import { useNavigate } from "react-router-dom";
document.title="Wedding Planner | Home"
function Home() {
  const navigate = useNavigate();
  return (
    
        
  <>
  {/* HERO */}

  <section className="hero-section">
    <div>
      <h1 className="hero-title">
        Plan Your Dream Wedding
      </h1>

      <p className="hero-subtitle mt-3">
        Customize Catering,
        Photography, Decoration,
        and every wedding detail
        from one platform.
      </p>

      <button
        className="btn btn-light btn-lg mt-4"
        onClick={() =>
          navigate("/planner")
        }
      >
        Start Planning
      </button>
    </div>
  </section>

  {/* SERVICES */}

  <section className="container py-5">
    <h2 className="section-title">
      Our Services
    </h2>

    <div className="row">

      <div className="col-md-4 mb-4">
        <div className="feature-card">
          <h3>🍽 Catering</h3>
          <p>
            Customized food menus
            according to your
            guest count.
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="feature-card">
          <h3>📸 Photography</h3>
          <p>
            Professional wedding
            photographers and
            cinematic shoots.
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="feature-card">
          <h3>🌸 Decoration</h3>
          <p>
            Elegant wedding themes
            and venue decoration.
          </p>
        </div>
      </div>

    </div>
  </section>

  {/* WHY CHOOSE US */}

  <section
    className="py-5"
    style={{
      background: "#fff5f7",
    }}
  >
    <div className="container">
      <h2 className="section-title">
        Why Choose Us
      </h2>

      <div className="row">

        <div className="col-md-4">
          <div className="feature-card">
            <h4>
              ✔ Trusted Vendors
            </h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card">
            <h4>
              ✔ Affordable Pricing
            </h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card">
            <h4>
              ✔ End-to-End Planning
            </h4>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* STATS */}

  <section className="container py-5">

    <h2 className="section-title">
      Our Achievements
    </h2>

    <div className="row">

      <div className="col-md-4">
        <div className="stat-box">
          <div className="stat-number">
            500+
          </div>

          Weddings Planned
        </div>
      </div>

      <div className="col-md-4">
        <div className="stat-box">
          <div className="stat-number">
            1000+
          </div>

          Happy Couples
        </div>
      </div>

      <div className="col-md-4">
        <div className="stat-box">
          <div className="stat-number">
            50+
          </div>

          Vendor Partners
        </div>
      </div>

    </div>

  </section>

  {/* TESTIMONIALS */}

  <section
    className="py-5"
    style={{
      background: "#fafafa",
    }}
  >
    <div className="container">

      <h2 className="section-title">
        Testimonials
      </h2>

      <div className="row">

        <div className="col-md-6">
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐

            <p className="mt-3">
              Amazing experience.
              Everything was managed
              perfectly.
            </p>

            <strong>
              Priya & Rahul
            </strong>
          </div>
        </div>

        <div className="col-md-6">
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐

            <p className="mt-3">
              Best wedding planning
              service we have used.
            </p>

            <strong>
              Sneha & Amit
            </strong>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* CTA */}

  <section
    className="py-5 text-center"
    style={{
      background:
        "linear-gradient(135deg,#ff4d6d,#ff758f)",
      color: "white",
    }}
  >
    <h2>
      Ready To Plan Your Wedding?
    </h2>

    <button
      className="btn btn-light btn-lg mt-3"
      onClick={() =>
        navigate("/planner")
      }
    >
      Start Planning Now
    </button>
  </section>
</>
  );
}

export default Home;