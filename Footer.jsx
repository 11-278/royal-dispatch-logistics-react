import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Company */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="text-warning fw-bold mb-3">
              <i className="fa-solid fa-truck-fast me-2"></i>
              Royal Dispatch
            </h3>

            <p className="text-light-emphasis">
              Royal Dispatch Logistics provides reliable, professional and
              24/7 truck dispatch services across the United States.
              Our mission is to maximize drivers' profits while ensuring
              timely freight management.
            </p>

            <div className="mt-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-warning btn-sm me-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-warning btn-sm me-2"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-warning btn-sm me-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-warning btn-sm"
              >
                <i className="fab fa-x-twitter"></i>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link className="footer-link" to="/">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link className="footer-link" to="/services">
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link className="footer-link" to="/drivers">
                  Drivers
                </Link>
              </li>

              <li className="mb-2">
                <Link className="footer-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Our Services</h5>

            <ul className="list-unstyled text-light-emphasis">

              <li className="mb-2">
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Dry Van Dispatch
              </li>

              <li className="mb-2">
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Reefer Dispatch
              </li>

              <li className="mb-2">
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Flatbed Dispatch
              </li>

              <li className="mb-2">
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                Box Truck Dispatch
              </li>

              <li className="mb-2">
                <i className="fa-solid fa-circle-check text-warning me-2"></i>
                24/7 Support
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Contact</h5>

            <p>
              <i className="fa-solid fa-location-dot text-warning me-2"></i>
              Dallas, Texas, USA
            </p>

            <p>
              <i className="fa-solid fa-phone text-warning me-2"></i>
              +1 (555) 123-4567
            </p>

            <p>
              <i className="fa-solid fa-envelope text-warning me-2"></i>
              info@royaldispatch.com
            </p>

            <p>
              <i className="fa-solid fa-clock text-warning me-2"></i>
              Mon - Sat : 24/7 Dispatch
            </p>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0 text-light-emphasis">
            © {new Date().getFullYear()} Royal Dispatch Logistics. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;