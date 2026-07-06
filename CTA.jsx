import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section py-5">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div className="card border-0 shadow-lg bg-dark text-white rounded-4">

              <div className="card-body text-center p-5">

                <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                  Start Driving With Confidence
                </span>

                <h2 className="display-5 fw-bold mb-4">
                  Ready To Grow Your Trucking Business?
                </h2>

                <p className="lead text-light mb-5">
                  Join hundreds of successful owner-operators and fleet owners
                  who trust Royal Dispatch Logistics to find premium freight,
                  negotiate the best rates, and provide 24/7 professional
                  dispatch support.
                </p>

                <div className="d-flex justify-content-center flex-wrap gap-3">

                <a
  href="tel:03124556787"
  className="btn btn-warning btn-lg px-5"
>
  <i className="fa-solid fa-phone me-2"></i>
  Call Now
</a>

                  <Link
                    to="/contact"
                    className="btn btn-outline-light btn-lg px-5"
                  >
                    <i className="fa-solid fa-envelope me-2"></i>
                    Contact Us
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;