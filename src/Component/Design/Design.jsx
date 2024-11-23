import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Design = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      const { initParticlesEngine } = await import("@tsparticles/react");
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract", // Particles attract towards the cursor
          },
        },
        modes: {
          attract: {
            distance: 200, // Attraction range
            duration: 0.4, // Smooth movement towards the cursor
            factor: 3, // Strength of attraction
          },
        },
      },
      particles: {
        color: {
          value: ["#ff7f50", "#87ceeb", "#ffa07a"], // Gradient-inspired colors (coral, sky blue, light salmon)
        },
        links: {
          enable: false, // No linking lines for a cleaner look
        },
        move: {
          enable: true,
          speed: 1.5, // Smooth motion
          outModes: {
            default: "bounce", // Bounce back when hitting the edges
          },
          random: true, // Adds organic movement
        },
        number: {
          density: {
            enable: true,
            area: 1000, // Spaced-out particles
          },
          value: 100, // Moderate number of particles
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }, // Adds a soft glow effect
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
          },
        },
        shape: {
          type: "circle", // Circular particles
        },
        size: {
          value: { min: 2, max: 5 }, // Particle size range
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
          },
        },
      },
      detectRetina: true,
      // background: {
      //   color: "#141414", // Deep black-gray for a modern look
      // },
    }),
    []
  );

  return init ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  ) : null;
};

export default Design;
