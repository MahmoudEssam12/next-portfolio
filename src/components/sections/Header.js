import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "./particles-nasa.json";
import styles from "../scss/Header.module.scss";

function Header() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div id="home" className={styles.home_header}>
      {init && (
        <Particles
          id={styles.tsparticles}
          options={particlesOptions}
          style={{ position: "relative !important" }}
        />
      )}
      <div className={styles.heading}>
        <span>Welcome to my Portfolio</span>
        <div className={styles.firstLine}>
          <p>Hi, I&apos;m</p>
          <h1>Mahmoud Essam</h1>
        </div>
        <h2>
          <div
            className={styles.job}
            style={{ display: "inline-block" }}>
            <p >
              Front-End&nbsp;
            </p>
            <p>Back-End&nbsp;</p>
            <p>FullStack&nbsp;</p>
          </div>
          Web Developer.</h2>
      </div>
    </div>
  );
}

export default Header;
