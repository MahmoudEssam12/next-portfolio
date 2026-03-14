import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";
import particlesOptions from "./particles-nasa.json";
import styles from "../scss/Header.module.scss";

const jobs = ["Frontend", "React & Next.js", "Fullstack"];

function Header() {
  const [init, setInit] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobIndex((i) => (i + 1) % jobs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className={styles.home_header}>
      {init && (
        <Particles
          id={styles.tsparticles}
          options={particlesOptions as Record<string, unknown>}
          style={{ position: "relative" }}
        />
      )}
      <div className={styles.heading}>
        <span>Welcome to my Portfolio</span>
        <div className={styles.firstLine}>
          <p>Hi, I&apos;m</p>
          <h1>Mahmoud Essam</h1>
        </div>
        <h2>
          <motion.span
            className={styles.job}
            layout
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={jobs[jobIndex]}
                className={styles.job_text}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {jobs[jobIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>{" "}
          <motion.span
            layout
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            Developer.
          </motion.span>
        </h2>
      </div>
    </div>
  );
}

export default Header;
