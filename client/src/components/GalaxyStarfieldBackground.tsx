import React, { useMemo } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const STAR_COUNT = 60; // 50–75 stars
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
    return Array.from({ length: STAR_COUNT }, (_, idx) => ({
      id: idx,
      x: Math.random(),
      y: Math.random(),
      size: randomBetween(1.2, 2.8),
      color: getRandomColor(),
      twinkleDelay: Math.random() * 4, // seconds
      twinkleDuration: 2 + Math.random() * 2, // seconds
      opacity: randomBetween(0.6, 1),
    }));
  }, []);
}

export default function GalaxyStarfieldBackground({ children }: { children?: React.ReactNode }) {
  const isMobile = useIsMobile();
  const stars = useStarfield();

  // Only render starfield on desktop/large screens
  if (isMobile) {
    return <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">{children}</div>;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Galaxy Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
        {/* SVG Starfield */}
        <svg
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1 }}
        >
          {stars.map((star) => (
            <circle
              key={star.id}
              cx={star.x * 100}
              cy={star.y * 100}
              r={star.size / 2}
              fill={star.color}
              opacity={star.opacity}
              style={{
                filter: `drop-shadow(0 0 4px ${star.color})`,
                animation: `star-twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`,
              }}
            />
          ))}
        </svg>
      </div>
      {/* Overlayed Content */}
      <div className="relative z-10">{children}</div>
      {/* Star twinkle animation */}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
} 