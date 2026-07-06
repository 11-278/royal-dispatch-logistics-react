function FloatingButtons() {
  return (
    <>
      {/* Call Button */}

      <a
        href="tel:03124556787"
        className="floating-call"
        title="Call Us"
      >
        <i className="fa-solid fa-phone"></i>
      </a>

      {/* WhatsApp Button */}

      <a
        href="https://wa.me/923124556787"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        title="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default FloatingButtons;