import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "../scss/Header.module.scss";
import HeaderParticles from "./HeaderParticles";
import RotatingTitle from "./RotatingTitle";

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
      <div className={styles.heading}>
        <span>Welcome to my Portfolio</span>
        <div className={styles.firstLine}>
          <p>Hi, I&apos;m</p>
          <h1>Mahmoud Essam</h1>
        </div>
        <RotatingTitle />
      </div>
    </div>
  );
}

export default Header;
