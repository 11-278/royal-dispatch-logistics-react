import ServicesSection from "../components/ServicesSection";
import CTA from "../components/CTA";

function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-dark text-white">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="badge bg-warning text-dark mb-3">
                Professional Dispatch Services
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Complete Truck Dispatch Solutions
              </h1>

              <p className="lead">
                We provide reliable dispatch services for owner operators,
                trucking companies and fleet owners across the United States.
              </p>

            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">

              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
                alt="Services"
                className="img-fluid rounded-4 shadow-lg"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Services */}
      <ServicesSection />

      {/* Why Choose Our Services */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-warning fw-bold">
              WHY CHOOSE US
            </span>

            <h2 className="display-5 fw-bold mt-2">
              Your Success Is Our Priority
            </h2>

          </div>

          <div className="row">

            <div className="col-md-4 mb-4">

              <div className="card h-100 border-0 shadow">

                <div className="card-body text-center p-4">

                  <i className="fa-solid fa-money-bill-wave text-warning display-4 mb-3"></i>

                  <h4 className="fw-bold">
                    Better Rates
                  </h4>

                  <p className="text-muted">
                    We negotiate directly with brokers to secure the highest
                    paying freight available.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4 mb-4">

              <div className="card h-100 border-0 shadow">

                <div className="card-body text-center p-4">

                  <i className="fa-solid fa-headset text-warning display-4 mb-3"></i>

                  <h4 className="fw-bold">
                    24/7 Support
                  </h4>

                  <p className="text-muted">
                    Our experienced dispatchers are available day and night.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4 mb-4">

              <div className="card h-100 border-0 shadow">

                <div className="card-body text-center p-4">

                  <i className="fa-solid fa-chart-line text-warning display-4 mb-3"></i>

                  <h4 className="fw-bold">
                    Business Growth
                  </h4>

                  <p className="text-muted">
                    We help owner operators increase revenue while reducing
                    downtime.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Pricing */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-warning fw-bold">
              SIMPLE PRICING
            </span>

            <h2 className="display-5 fw-bold mt-2">
              Affordable Dispatch Plans
            </h2>

          </div>

          <div className="row justify-content-center">

            <div className="col-lg-4">

              <div className="card border-0 shadow-lg">

                <div className="card-body text-center p-5">

                  <h3 className="fw-bold">
                    Dispatch Service
                  </h3>

                  <h1 className="display-3 text-warning my-4">
                    5%
                  </h1>

                  <p className="text-muted">
                    Only pay after you get paid.
                  </p>

                  <hr />

                  <p>
                    <i className="fa-solid fa-check text-warning me-2"></i>
                    Dedicated Dispatcher
                  </p>

                  <p>
                    <i className="fa-solid fa-check text-warning me-2"></i>
                    Load Booking
                  </p>

                  <p>
                    <i className="fa-solid fa-check text-warning me-2"></i>
                    Broker Negotiation
                  </p>

                  <p>
                    <i className="fa-solid fa-check text-warning me-2"></i>
                    Paperwork
                  </p>

                  <p>
                    <i className="fa-solid fa-check text-warning me-2"></i>
                    24/7 Support
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <CTA />
    </>
  );
}

export default Services;