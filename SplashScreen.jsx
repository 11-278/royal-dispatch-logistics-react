import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>

      <div className="text-center">

        <i className="fa-solid fa-truck-fast splash-icon"></i>

        <h1 className="splash-title">
          Royal Dispatch
        </h1>

        <h4 className="text-warning mb-3">
          Logistics
        </h4>

        <p className="text-light">
          Delivering Excellence, One Mile At A Time
        </p>

        <div className="loader mt-4"></div>

      </div>

    </div>
  );
}

export default SplashScreen;