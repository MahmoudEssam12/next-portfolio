import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../scss/Header.module.scss";

const jobs = ["Frontend", "React & Next.js", "Fullstack"];
const layoutTransition = { duration: 0.35, ease: [0.4, 0, 0.2, 1] } as const;
const slideTransition = { duration: 0.3, ease: "easeInOut" } as const;

export default function RotatingTitle() {
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobIndex((i) => (i + 1) % jobs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2>
      <motion.span
        className={styles.job}
        layout
        transition={layoutTransition}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={jobs[jobIndex]}
            className={styles.job_text}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={slideTransition}
          >
            {jobs[jobIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>{" "}
      <motion.span layout transition={layoutTransition}>
        Developer.
      </motion.span>
    </h2>
  );
}
