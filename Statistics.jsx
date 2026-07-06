function Statistics() {
  const stats = [
    {
      icon: "fa-solid fa-truck-fast",
      number: "5,000+",
      title: "Loads Delivered",
    },
    {
      icon: "fa-solid fa-users",
      number: "1,200+",
      title: "Happy Drivers",
    },
    {
      icon: "fa-solid fa-award",
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: "fa-solid fa-star",
      number: "98%",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="py-5 stats-section">

      <div className="container">

        <div className="text-center mb-5">

          <span className="text-warning fw-bold text-uppercase">
            Our Achievement
          </span>

          <h2 className="display-5 fw-bold text-white mt-2">
            Numbers That Speak For Themselves
          </h2>

          <p className="text-light">
            We have built strong relationships with thousands of drivers and
            logistics partners across the United States.
          </p>

        </div>

        <div className="row">

          {stats.map((stat, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="card border-0 text-center h-100 stat-card">

                <div className="card-body py-5">

                  <i
                    className={`${stat.icon} text-warning mb-4`}
                    style={{ fontSize: "55px" }}
                  ></i>

                  <h2 className="display-5 fw-bold text-white">
                    {stat.number}
                  </h2>

                  <h5 className="text-light mt-3">
                    {stat.title}
                  </h5>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;