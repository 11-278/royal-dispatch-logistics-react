import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      icon: "fa-solid fa-truck-moving",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      title: "Dry Van Dispatch",
      description:
        "Professional dispatch solutions for dry van carriers with the highest-paying freight.",
      features: [
        "High Paying Loads",
        "Broker Negotiation",
        "24/7 Dispatch",
        "Paperwork Management",
      ],
    },
    {
      icon: "fa-solid fa-snowflake",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
      title: "Reefer Dispatch",
      description:
        "Temperature-controlled freight management with reliable scheduling.",
      features: [
        "Cold Chain Freight",
        "Dedicated Dispatcher",
        "Best Rates",
        "Route Planning",
      ],
    },
    {
      icon: "fa-solid fa-road",
      image:
        "https://images.unsplash.com/photo-1501706362039-c6e80948e4bb?auto=format&fit=crop&w=800&q=80",
      title: "Flatbed Dispatch",
      description:
        "Efficient dispatch services for oversized and heavy freight transportation.",
      features: [
        "Oversized Loads",
        "Experienced Team",
        "Fast Booking",
        "24/7 Support",
      ],
    },
    {
      icon: "fa-solid fa-box",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      title: "Box Truck Dispatch",
      description:
        "Reliable freight dispatching for box truck owner-operators.",
      features: [
        "Daily Loads",
        "Local & Regional",
        "Paperwork",
        "Broker Support",
      ],
    },
    {
      icon: "fa-solid fa-fire",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      title: "Hotshot Dispatch",
      description:
        "Fast freight solutions for urgent deliveries across the country.",
      features: [
        "Express Loads",
        "Quick Booking",
        "Premium Rates",
        "24/7 Assistance",
      ],
    },
    {
      icon: "fa-solid fa-plug-circle-bolt",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80",
      title: "Power Only",
      description:
        "Power-only dispatch services connecting tractors with available trailers.",
      features: [
        "Flexible Routes",
        "Efficient Scheduling",
        "Load Matching",
        "Dedicated Support",
      ],
    },
    {
      icon: "fa-brands fa-amazon",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      title: "Amazon Relay",
      description:
        "Professional Amazon Relay load management and dispatch support.",
      features: [
        "Relay Loads",
        "On-Time Delivery",
        "Dedicated Dispatcher",
        "Highest Rates",
      ],
    },
    {
      icon: "fa-solid fa-headset",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
      title: "24/7 Dispatch Support",
      description:
        "Round-the-clock dispatch assistance to keep your trucks moving.",
      features: [
        "Always Available",
        "Fast Response",
        "Issue Resolution",
        "Driver Assistance",
      ],
    },
  ];

  return (
    <section className="py-5 bg-light">

      <div className="container">

        <div className="text-center mb-5">

          <span className="text-warning fw-bold text-uppercase">
            Our Services
          </span>

          <h2 className="display-5 fw-bold mt-2">
            Truck Dispatch Solutions
          </h2>

          <p className="text-muted">
            We provide premium dispatch services for owner-operators and fleet
            owners across the United States.
          </p>

        </div>

        <div className="row">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;