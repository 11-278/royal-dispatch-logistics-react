function About() {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6 mb-5 mb-lg-0">

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Royal Dispatch"
              className="img-fluid rounded-4 shadow-lg"
            />

          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            <span className="text-warning fw-bold text-uppercase">
              About Royal Dispatch
            </span>

            <h2 className="display-5 fw-bold mt-3 mb-4">
              Your Trusted Truck Dispatch Partner
            </h2>

            <p className="text-muted mb-4">
              Royal Dispatch Logistics is a professional truck dispatch company
              dedicated to helping owner-operators and trucking companies
              maximize their earnings. We handle freight booking, broker
              negotiations, paperwork, route planning, and 24/7 support so you
              can focus on driving.
            </p>

            <div className="row">

              <div className="col-md-6 mb-3">

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body">

                    <i className="fa-solid fa-bullseye text-warning fs-1 mb-3"></i>

                    <h5 className="fw-bold">
                      Our Mission
                    </h5>

                    <p className="text-muted">
                      Deliver reliable dispatch solutions that increase driver
                      profitability and reduce operational stress.
                    </p>

                  </div>

                </div>

              </div>

              <div className="col-md-6 mb-3">

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body">

                    <i className="fa-solid fa-eye text-warning fs-1 mb-3"></i>

                    <h5 className="fw-bold">
                      Our Vision
                    </h5>

                    <p className="text-muted">
                      Become one of America's most trusted logistics partners
                      through innovation, transparency, and customer success.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Features */}

            <div className="mt-4">

              <p>
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Professional Dispatchers
              </p>

              <p>
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                24/7 Driver Support
              </p>

              <p>
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Highest Paying Loads
              </p>

              <p>
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Broker Negotiation Experts
              </p>

              <p>
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Route Planning & Paperwork
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;