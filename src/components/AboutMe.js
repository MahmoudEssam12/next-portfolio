import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./scss/About.module.scss";
import CustomTab from "./CustomTab";

function AboutMe() {
  return (
    <div id="about" className={styles.about_me}>
      <Container>
        <Row>
          <Col lg={5} md={5}>
            <div className={styles.img_wrapper}>
              <picture>
                <img
                  src="/images/avatar.webp"
                  alt="Mahmoud Essam"
                  loading="lazy"
                />
              </picture>
            </div>
          </Col>
          <Col lg={7} md={7}>
            <div className={styles.info_wrapper}>
              <section className={styles.info_header}>
                <h2>About Me</h2>
                <p>
                  My Name is Mahmoud, i&apos;m a Fullstack Web Developer i
                  shifted my career from accounting to web development, i
                  graduated from <br />
                  <a
                    href="https://www.iti.gov.eg/iti/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ITI
                  </a>{" "}
                  - Fullstack web development using MEARN... i did some projects
                  to proof to myself before anyone that i&apos;m really good in
                  web development... so feel free to see my projects and wish me
                  luck.
                  <br />
                  You can download my CV from this Link{" "}
                  <a
                    href="https://drive.google.com/file/d/1y-9_WStEGHBJEaD4n-aw5oq3FHxezxdm/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </p>
              </section>
              <section className={styles.the_info}>
                <div className="info-nav-wrapper">
                  <div className={styles.tabs_section}>
                    <CustomTab />
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
