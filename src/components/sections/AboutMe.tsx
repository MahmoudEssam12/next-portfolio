import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import styles from "../scss/About.module.scss";
import CustomTab from "../CustomTab";

function AboutMe() {
  return (
    <div id="about" className={styles.about_me}>
      <Container>
        <Row>
          <Col lg={5} md={5}>
            <motion.div
              className={styles.img_wrapper}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <picture>
                <img
                  src="/images/avatar.webp"
                  alt="Mahmoud Essam"
                  loading="lazy"
                />
              </picture>
            </motion.div>
          </Col>
          <Col lg={7} md={7}>
            <motion.div
              className={styles.info_wrapper}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <section className={styles.info_header}>
                <h2>About Me</h2>
                <p>
                  I&apos;m Mahmoud, a Frontend Developer based in Cairo, Egypt
                  with 3+ years of professional experience building web
                  applications. I work primarily with React, Next.js, and
                  TypeScript, and I&apos;ve also shipped production code with
                  Vue&nbsp;3, Angular, and Node.js.
                  <br />
                  <br />
                  I&apos;ve built everything from multi-vendor e-commerce
                  platforms and freelancing marketplaces to real-time video
                  conferencing features with Agora SDK and fullstack dashboards
                  with Fastify &amp; Postgres. I graduated from{" "}
                  <a
                    href="https://www.iti.gov.eg/iti/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ITI
                  </a>{" "}
                  with a MERN Fullstack Diploma and haven&apos;t stopped
                  learning since.
                </p>
              </section>
              <section className={styles.the_info}>
                <div className="info-nav-wrapper">
                  <div className={styles.tabs_section}>
                    <CustomTab />
                  </div>
                </div>
              </section>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
