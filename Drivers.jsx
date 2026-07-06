
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

function Drivers() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <span className="badge bg-warning text-dark mb-3">
                Join Our Team
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Drive With Royal Dispatch Logistics
              </h1>

              <p className="lead">
                Whether you're an Owner Operator or Fleet Owner, our experienced
                dispatchers help you maximize your earnings with premium loads,
                24/7 support and professional dispatch services.
              </p>

             <Link to="/contact" className="btn btn-warning btn-lg mt-3">
  Apply Today
</Link>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                className="img-fluid rounded-4 shadow-lg"
                alt="Driver"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <span className="text-warning fw-bold">
              DRIVER BENEFITS
            </span>

            <h2 className="display-5 fw-bold mt-2">
              Why Drivers Choose Royal Dispatch
            </h2>
          </div>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body text-center p-4">

                  <i className="fa-solid fa-money-bill-wave text-warning display-4 mb-3"></i>

                  <h4 className="fw-bold">
                    Higher Earnings
                  </h4>

                  <p className="text-muted">
                    We negotiate the highest freight rates to maximize your weekly income.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body text-center p-4">

                  <i className="fa-solid fa-headset text-warning display-4 mb-3"></i>

                  <h4 className="fw-bold">
                    24/7 Support
                  </h4>

                  <p className="text-muted">
                    Our dispatchers are always available whenever you need assistance.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body text-center p-4">

                  <i className="fa-solid fa-route text-warning display-4 mb-3"></i>

                  <h4 className="fw-bold">
                    Smart Route Planning
                  </h4>

                  <p className="text-muted">
                    Reduce dead miles and increase profits with optimized routes.
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Requirements */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-warning fw-bold">
              REQUIREMENTS
            </span>

            <h2 className="display-5 fw-bold mt-2">
              Who Can Join?
            </h2>

          </div>

          <div className="row">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80"
                className="img-fluid rounded-4 shadow"
                alt="Truck"
              />

            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">

              <ul className="list-group shadow">

                <li className="list-group-item">
                  <i className="fa-solid fa-check text-warning me-2"></i>
                  Valid CDL License
                </li>

                <li className="list-group-item">
                  <i className="fa-solid fa-check text-warning me-2"></i>
                  Active MC Authority
                </li>

                <li className="list-group-item">
                  <i className="fa-solid fa-check text-warning me-2"></i>
                  Active DOT Number
                </li>

                <li className="list-group-item">
                  <i className="fa-solid fa-check text-warning me-2"></i>
                  Commercial Insurance
                </li>

                <li className="list-group-item">
                  <i className="fa-solid fa-check text-warning me-2"></i>
                  Professional Attitude
                </li>

                <li className="list-group-item">
                  <i className="fa-solid fa-check text-warning me-2"></i>
                  Commitment to Safety
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Application Process */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-warning fw-bold">
              APPLICATION PROCESS
            </span>

            <h2 className="display-5 fw-bold mt-2">
              Join In 4 Easy Steps
            </h2>

          </div>

          <div className="row">

            {[
              "Submit Your Information",
              "Verification Process",
              "Meet Your Dispatcher",
              "Start Hauling Loads",
            ].map((step, index) => (

              <div className="col-md-3 mb-4" key={index}>

                <div className="card border-0 shadow text-center h-100">

                  <div className="card-body p-4">

                    <div
                      className="bg-warning text-dark rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "70px",
                        height: "70px",
                        fontSize: "28px",
                        fontWeight: "bold",
                      }}
                    >
                      {index + 1}
                    </div>

                    <h5 className="fw-bold">
                      {step}
                    </h5>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-warning fw-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="display-5 fw-bold mt-2">
              Driver FAQs
            </h2>

          </div>

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">

              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  How much do you charge?
                </button>
              </h2>

              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We charge only a small percentage after you receive payment.
                </div>
              </div>

            </div>

            <div className="accordion-item">

              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Do you provide 24/7 support?
                </button>
              </h2>

              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes. Our dispatch team is available 24 hours a day.
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

export default Drivers;