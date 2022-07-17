import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles-nasa.json";
import styles from "./scss/Header.module.scss";

function Header() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])
  const particlesLoaded = (container) => {

  };


  return (
    <div id="home" className={styles.home_header}>
      {/* <Particles options={particlesOptions} init={particlesInit} /> */}
      <Particles
        id={styles.tsparticles}
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        style={{ position: "relative !important" }}
      />
      <div className={styles.heading}>
        <span>Welcome to my Portfolio</span>
        <h1>Hi, I&apos;m Mahmoud Essam</h1>
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
