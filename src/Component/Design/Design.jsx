import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Ensure you have this installed via npm

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
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FEC576", // Particle color
        },
        links: {
          color: "#FEC576", // Link color
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", // Shape of particles
        },
        size: {
          value: { min: 1, max: 2 }, // Particle size range
        },
      },
      detectRetina: true,
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
