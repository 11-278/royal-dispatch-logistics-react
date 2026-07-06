import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">
          <i className="fa-solid fa-truck-fast me-2"></i>
          Royal Dispatch
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/drivers"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                }
              >
                Drivers
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            {/* CTA Button */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <a
                href="tel:+1234567890"
                className="btn btn-warning px-4 fw-semibold rounded-pill"
              >
                <i className="fa-solid fa-phone me-2"></i>
                Call Now
              </a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;