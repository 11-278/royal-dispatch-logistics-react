import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Johnson",
      company: "Owner Operator",
      rating: 5,
      review:
        "Royal Dispatch has completely changed my business. I earn more every week because they always find high-paying loads and handle everything professionally.",
    },
    {
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Williams",
      company: "Fleet Owner",
      rating: 5,
      review:
        "Excellent communication and 24/7 support. Their dispatchers negotiate great rates and save us valuable time every single day.",
    },
    {
      image:
        "https://randomuser.me/api/portraits/men/67.jpg",
      name: "David Anderson",
      company: "Truck Driver",
      rating: 5,
      review:
        "Professional, reliable, and honest. I've been working with Royal Dispatch for over two years and couldn't be happier with their service.",
    },
  ];

  return (
    <section className="py-5 bg-light">

      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">

          <span className="text-warning fw-bold text-uppercase">
            Testimonials
          </span>

          <h2 className="display-5 fw-bold mt-2">
            What Our Clients Say
          </h2>

          <p className="text-muted">
            Thousands of truck drivers and fleet owners trust Royal Dispatch
            Logistics to keep their business moving.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="row">

          {testimonials.map((testimonial, index) => (

            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              company={testimonial.company}
              rating={testimonial.rating}
              review={testimonial.review}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;