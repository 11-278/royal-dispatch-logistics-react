function ServiceCard({
  icon,
  image,
  title,
  description,
  features
}) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">

      <div className="card service-card h-100 border-0 shadow">

        <img
          src={image}
          alt={title}
          className="card-img-top"
        />

        <div className="card-body">

          <div className="service-icon mb-3">
            <i className={`${icon} text-warning fs-1`}></i>
          </div>

          <h4 className="fw-bold mb-3">
            {title}
          </h4>

          <p className="text-muted">
            {description}
          </p>

          <ul className="list-unstyled mt-3">

            {features.map((feature, index) => (
              <li key={index} className="mb-2">

                <i className="fa-solid fa-circle-check text-warning me-2"></i>

                {feature}

              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default ServiceCard;