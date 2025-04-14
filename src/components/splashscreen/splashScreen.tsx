import { useState, useEffect } from "react";

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [fadeIn, setFadeIn] = useState(false); // Kontrol fade-in
  const [fadeOut, setFadeOut] = useState(false); // Kontrol fade-out

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2700);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`h-screen w-screen flex justify-center items-center bg-white transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0" : fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
       <img
          src="/assets/icons/logo-app.png"
          alt="splash"
          className="w-[200px] lg:w-[300px] 2xl:w-[400px]"
        />
    </div>
  );
};

export default SplashScreen;