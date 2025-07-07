import React, { useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const STAR_LAYERS = 3;
const STARS_PER_LAYER = [400, 300, 200]; // Foreground, midground, background
const HERO_STARS_COUNT = 8;
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

function getRandomInt(a: number, b: number) {
  return Math.floor(randomBetween(a, b + 1));
}

// Generate all stars only once
function useStarfield() {
  return useMemo(() => {
    let stars: any[] = [];
    let heroStarIndices: Set<number> = new Set();
    let totalStars = STARS_PER_LAYER.reduce((a, b) => a + b, 0);
    while (heroStarIndices.size < HERO_STARS_COUNT) {
      heroStarIndices.add(getRandomInt(0, totalStars - 1));
    }
    let idx = 0;
    for (let layer = 0; layer < STAR_LAYERS; layer++) {
      for (let i = 0; i < STARS_PER_LAYER[layer]; i++, idx++) {
        const isHero = heroStarIndices.has(idx);
        stars.push({
          id: idx,
          x: Math.random(),
          y: Math.random(),
          size: randomBetween(layer === 0 ? 1.2 : 0.7, layer === 0 ? 2.2 : 1.3) * (isHero ? 2.2 : 1),
          opacity: randomBetween(0.5, 0.9) * (isHero ? 1 : randomBetween(0.7, 1)),
          color: getRandomColor(),
          layer,
          isHero,
        });
      }
    }
    return stars;
  }, []);
}

const CONSTELLATIONS = [
  // Each constellation is an array of star indices (from the stars array)
  [5, 12, 18, 25, 32],
  [100, 105, 110, 120, 130],
];

export default function GalaxyStarfieldBackground({ children }: { children?: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const [drifting, setDrifting] = useState<{ [id: number]: boolean }>({});
  const stars = useStarfield();

  // Helper to get star position in px
  const getStarStyle = (star: any) => {
    const base = {
      left: `calc(${star.x * 100}vw)`,
      top: `calc(${star.y * 100}vh)`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      opacity: star.opacity,
      zIndex: 10 + star.layer,
      background: star.color,
      boxShadow: star.isHero
        ? `0 0 8px 2px ${star.color}, 0 0 32px 8px #7f5fff44`
        : `0 0 4px 1px ${star.color}`,
    };
    return base;
  };

  // Animate hero star drift
  const getHeroStarAnim = (id: number) => {
    if (!drifting[id]) return {};
    return {
      animate: {
        x: [0, randomBetween(-100, 100), randomBetween(-200, 200), 0],
        y: [0, randomBetween(-100, 100), randomBetween(-200, 200), 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
    };
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Galaxy Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-none" />
        {/* Starfield */}
        {stars.map((star, i) =>
          star.isHero ? (
            <motion.div
              key={star.id}
              style={getStarStyle(star)}
              className={`absolute rounded-full cursor-pointer transition-transform duration-200 will-change-transform ${
                star.isHero
                  ? "shadow-xl animate-pulse hover:scale-150 hover:shadow-blue-400/80"
                  : ""
              }`}
              animate={{
                scale: [1, 1.15, 1],
                filter: [
                  "brightness(1)",
                  "brightness(1.5) drop-shadow(0 0 8px #7f5fff)",
                  "brightness(1)",
                ],
                y: [0, randomBetween(-20, 20), 0],
                x: [0, randomBetween(-20, 20), 0],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              whileHover={{ rotate: [0, 10, -10, 0], scale: 1.5, filter: "brightness(2) drop-shadow(0 0 16px #fff)" }}
              onClick={() => setDrifting((d) => ({ ...d, [star.id]: !d[star.id] }))}
              {...getHeroStarAnim(star.id)}
            />
          ) : (
            <motion.div
              key={star.id}
              style={getStarStyle(star)}
              className="absolute rounded-full transition-transform duration-200 will-change-transform hover:scale-150 hover:shadow-xl"
              animate={{
                y: [0, randomBetween(-10, 10), 0],
                x: [0, randomBetween(-10, 10), 0],
              }}
              transition={{
                duration: 8 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              whileHover={{ rotate: [0, 10, -10, 0], scale: 1.5, filter: "brightness(1.5)" }}
            />
          )
        )}
      </div>
      {/* Overlayed Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 