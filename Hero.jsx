import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,31,58,0.75), rgba(11,31,58,0.75)), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">

            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              Trusted Truck Dispatch Company
            </span>

            <h1 className="display-3 fw-bold mb-4">
              Delivering Excellence
              <br />
              One Mile At A Time
            </h1>

            <p className="lead text-light mb-4">
              Royal Dispatch Logistics provides reliable dispatch solutions for
              owner-operators and trucking companies across the United States.
              Maximize your profits while we handle the paperwork, load booking,
              and broker negotiations.
            </p>

            <div className="d-flex flex-wrap gap-3">

              <Link
                to="/contact"
                className="btn btn-warning btn-lg px-4"
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="btn btn-outline-light btn-lg px-4"
              >
                Our Services
              </Link>

            </div>

          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
              alt="Truck"
              className="img-fluid rounded-4 shadow-lg"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;