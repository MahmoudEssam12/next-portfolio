import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "../scss/Header.module.scss";
import HeaderParticles from "./HeaderParticles";
import RotatingTitle from "./RotatingTitle";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

function Header() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div id="home" className={styles.home_header}>
      {init && <HeaderParticles />}
      <motion.div
        className={styles.heading}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={fadeUp}>Welcome to my Portfolio</motion.span>
        <motion.div className={styles.firstLine} variants={fadeUp}>
          <p>Hi, I&apos;m</p>
          <h1>Mahmoud Essam</h1>
        </motion.div>
        <motion.div variants={fadeUp}>
          <RotatingTitle />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
