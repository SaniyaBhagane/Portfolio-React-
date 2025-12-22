import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate stars + meteors once on mount
  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  // Handle window resize safely
  useEffect(() => {
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const count = Math.floor(
      (window.innerWidth * window.innerHeight) / 9000
    );

    const newStars = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.8,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.4,
      blur: Math.random() * 0.6,
      duration: Math.random() * 5 + 3,
    }));

    setStars(newStars);
  };

  const generateMeteors = () => {
    const count = 4;

    const newMeteors = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 1,
      x: Math.random() * 100,
      y: Math.random() * 30,
      delay: Math.random() * 15,
      blur: Math.random() * 0.5,
      duration: Math.random() * 3 + 4,
    }));

    setMeteors(newMeteors);
  };

  return (
    <>
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#05070d] via-[#02040a] to-black" />

      {/* Stars + meteors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              filter: `blur(${star.blur}px)`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: `${meteor.size * 50}px`,
              height: `${meteor.size}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.duration}s`,
              filter: `blur(${meteor.blur}px)`,
            }}
          />
        ))}
      </div>
    </>
  );
};
