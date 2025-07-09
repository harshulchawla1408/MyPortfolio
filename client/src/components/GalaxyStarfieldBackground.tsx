import React, { useMemo } from "react";

const STAR_COUNT = 60;
const STAR_COLORS = [
  "#b3cfff", // blue-white
  "#e0d7ff", // purple-white
  "#fffbe6", // yellow-white
  "#a3a3ff", // soft purple
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function getRandomColor() {
  return STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
}

function useStarfield() {
  return useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, idx) => {
      const isBright = Math.random() < 0.18; // ~18% are brighter
      return {
        id: idx,
        x: Math.random(),
        y: Math.random(),
        size: randomBetween(isBright ? 2.5 : 1, isBright ? 3.8 : 2),
        color: getRandomColor(),
        twinkleDelay: Math.random() * 8, // seconds
        twinkleDuration: 2 + Math.random() * 3, // seconds
        moveDuration: isBright ? 22 + Math.random() * 10 : 30 + Math.random() * 20, // bright stars move a bit faster
        moveX: isBright ? randomBetween(-24, 24) : randomBetween(-10, 10),
        moveY: isBright ? randomBetween(-24, 24) : randomBetween(-10, 10),
        isBright,
        glowDelay: Math.random() * 6, // for glow animation
      };
    });
  }, []);
}

const StarfieldBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const stars = useStarfield();

  // Parallax effect on scroll (bonus)
  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty('--starfield-parallax', `${y * 0.04}px`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Galaxy Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
        {/* Starfield */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1, willChange: 'transform' }}>
          {stars.map((star) => (
            <div
              key={star.id}
              className={`absolute rounded-full ${star.isBright ? 'star-glow' : ''}`}
              style={{
                left: `calc(${star.x * 100}vw)`,
                top: `calc(${star.y * 100}vh + var(--starfield-parallax, 0px))`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                background: star.color,
                opacity: star.isBright ? 0.98 : 0.7,
                filter: star.isBright ? `drop-shadow(0 0 12px ${star.color})` : `drop-shadow(0 0 3px ${star.color})`,
                animation: `star-move-${star.id} ${star.moveDuration}s linear infinite, star-twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite${star.isBright ? `, star-glow ${6 + Math.random() * 2}s ease-in-out ${star.glowDelay}s infinite` : ''}`,
                willChange: 'transform, opacity, filter',
                zIndex: 2,
              }}
            />
          ))}
        </div>
      </div>
      {/* Overlayed Content */}
      <div className="relative z-10">{children}</div>
      {/* Keyframes for all stars and twinkle/glow */}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes star-glow {
          0%, 100% { filter: brightness(1.2) drop-shadow(0 0 16px #b3cfff); }
          50% { filter: brightness(2.2) drop-shadow(0 0 32px #fffbe6); }
        }
        ${stars
          .map(
            (star) =>
              `@keyframes star-move-${star.id} {
                0% { transform: translate(0, 0); }
                100% { transform: translate(${star.moveX}px, ${star.moveY}px); }
              }`
          )
          .join('\n')}
      `}</style>
    </div>
  );
};

export default StarfieldBackground; 