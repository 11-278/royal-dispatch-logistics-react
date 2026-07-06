function WhyChooseUs() {
  const reasons = [
    {
      icon: "fa-solid fa-money-bill-trend-up",
      title: "Highest Paying Loads",
      description:
        "We negotiate with brokers to secure the best freight rates and maximize your profit.",
    },
    {
      icon: "fa-solid fa-headset",
      title: "24/7 Dispatch Support",
      description:
        "Our dispatchers are available around the clock to assist you whenever needed.",
    },
    {
      icon: "fa-solid fa-route",
      title: "Smart Route Planning",
      description:
        "Efficient route planning helps reduce empty miles and increase your weekly earnings.",
    },
    {
      icon: "fa-solid fa-file-signature",
      title: "Paperwork Management",
      description:
        "We handle rate confirmations, invoices, broker communication and documentation.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Dedicated Dispatcher",
      description:
        "Every driver gets a dedicated dispatcher who understands their preferences.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Reliable & Trusted",
      description:
        "Professional dispatch services trusted by owner-operators and trucking companies nationwide.",
    },
  ];

  return (
    <section className="py-5 bg-white">

      <div className="container">

        <div className="text-center mb-5">

          <span className="text-warning fw-bold text-uppercase">
            Why Choose Us
          </span>

          <h2 className="display-5 fw-bold mt-2">
            Experience The Royal Difference
          </h2>

          <p className="text-muted">
            We help truck drivers focus on driving while we handle the rest.
          </p>

        </div>

        <div className="row">

          {reasons.map((item, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="card border-0 shadow h-100 why-card">

                <div className="card-body text-center p-4">

                  <div className="mb-4">

                    <i
                      className={`${item.icon} text-warning`}
                      style={{ fontSize: "55px" }}
                    ></i>

                  </div>

                  <h4 className="fw-bold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-muted">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;