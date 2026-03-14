import { memo } from "react";
import Particles from "@tsparticles/react";
import particlesOptions from "./particles-nasa.json";
import styles from "../scss/Header.module.scss";

const HeaderParticles = memo(function HeaderParticles() {
  return (
    <Particles
      id={styles.tsparticles}
      options={particlesOptions as Record<string, unknown>}
      style={{ position: "relative" }}
    />
  );
});

export default HeaderParticles;
