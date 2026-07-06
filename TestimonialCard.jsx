function TestimonialCard({
  image,
  name,
  company,
  rating,
  review,
}) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div className="card border-0 shadow testimonial-card h-100">

        <div className="card-body p-4">

          {/* Customer */}

          <div className="d-flex align-items-center mb-3">

            <img
              src={image}
              alt={name}
              className="rounded-circle border border-3 border-warning"
              width="80"
              height="80"
              style={{ objectFit: "cover" }}
            />

            <div className="ms-3">

              <h5 className="fw-bold mb-1">
                {name}
              </h5>

              <small className="text-muted">
                {company}
              </small>

            </div>

          </div>

          {/* Rating */}

          <div className="mb-3">

            {[...Array(rating)].map((_, index) => (

              <i
                key={index}
                className="fa-solid fa-star text-warning me-1"
              ></i>

            ))}

          </div>

          {/* Review */}

          <p className="text-muted fst-italic">
            "{review}"
          </p>

        </div>

      </div>

    </div>
  );
}

export default TestimonialCard;