import CTA from "../components/CTA";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <span className="badge bg-warning text-dark mb-3">
                Contact Royal Dispatch
              </span>

              <h1 className="display-4 fw-bold mb-4">
                We're Here To Help You Grow
              </h1>

              <p className="lead">
                Contact our professional dispatch team anytime. We are available
                24/7 to answer your questions and help your trucking business
                succeed.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                className="img-fluid rounded-4 shadow-lg"
                alt="Customer Support"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section className="py-5">

        <div className="container">

          <div className="row">

            {/* Contact Form */}

            <div className="col-lg-7 mb-4">

              <div className="card border-0 shadow-lg">

                <div className="card-body p-5">

                  <h2 className="fw-bold mb-4">
                    Send Us A Message
                  </h2>

                  <form>

                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>

                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        rows="6"
                        className="form-control"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <button className="btn btn-warning btn-lg w-100">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      Send Message
                    </button>

                  </form>

                </div>

              </div>

            </div>

            {/* Contact Information */}

            <div className="col-lg-5">

              <div className="card border-0 shadow-lg h-100">

                <div className="card-body p-5">

                  <h2 className="fw-bold mb-4">
                    Contact Information
                  </h2>

                  <div className="mb-4">

                    <h5>
                      <i className="fa-solid fa-location-dot text-warning me-3"></i>
                      Office
                    </h5>

                    <p className="text-muted">
                      Dallas, Texas, USA
                    </p>

                  </div>

                  <div className="mb-4">

                    <h5>
                      <i className="fa-solid fa-phone text-warning me-3"></i>
                      Phone
                    </h5>

                    <p>
  <a
    href="tel:03124556787"
    className="text-decoration-none text-muted"
  >
    0312-4556787
  </a>
</p>

                  </div>

                  <div className="mb-4">

                    <h5>
                      <i className="fa-solid fa-envelope text-warning me-3"></i>
                      Email
                    </h5>

                    <p className="text-muted">
                      info@royaldispatch.com
                    </p>

                  </div>

                  <div className="mb-4">

                    <h5>
                      <i className="fa-solid fa-clock text-warning me-3"></i>
                      Business Hours
                    </h5>

                    <p className="text-muted">
                      24 Hours / 7 Days
                    </p>

                  </div>

                  <div className="mt-4">

                    <a href="#" className="btn btn-outline-warning me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="#" className="btn btn-outline-warning me-2">
                      <i className="fab fa-instagram"></i>
                    </a>

                    <a href="#" className="btn btn-outline-warning me-2">
                      <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="#" className="btn btn-outline-warning">
                      <i className="fab fa-x-twitter"></i>
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section>

        <iframe
          title="Royal Dispatch Location"
          src="https://www.google.com/maps?q=Dallas,Texas&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </section>

      <CTA />
    </>
  );
}

export default Contact;