import React from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSearchengin, FaDev, FaCode } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { CgPerformance, CgTapSingle } from "react-icons/cg";
import Card from "../Card";
import styles from "../scss/Services.module.scss";

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

function Services() {
  return (
    <section className={`section ${styles.services_section}`} id="services">
      <Container>
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>What I Do</h2>
          <p>
            From pixel-perfect UIs to scalable architectures — here&apos;s what
            I bring to every project.
          </p>
        </motion.div>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row>
            <Card
              icon={<FaSearchengin />}
              header="SEO & Performance"
              par="I optimize for search engines with semantic HTML, structured data, SSR/SSG with Next.js, and Core Web Vitals tuning to maximize discoverability."
              index={0}
            />
            <Card
              icon={<GoDeviceMobile />}
              header="Responsive Design"
              par="Every interface I build is mobile-first and adapts fluidly across devices and screen sizes using modern CSS and component-driven layouts."
              index={1}
            />
            <Card
              icon={<FaDev />}
              header="Web Applications"
              par="From e-commerce platforms and freelancing marketplaces to real-time collaboration tools — I build full-featured web apps with React, Next.js, Vue, and Angular."
              index={2}
            />
            <Card
              icon={<FaCode />}
              header="Clean & Maintainable Code"
              par="I write well-structured, typed code with TypeScript, follow component-driven architecture, and build reusable UI libraries for long-term maintainability."
              index={3}
            />
            <Card
              icon={<CgPerformance />}
              header="Performance Optimization"
              par="Lazy loading, code splitting, caching strategies, image optimization, and efficient rendering — I ensure fast load times and smooth user experiences."
              index={4}
            />
            <Card
              icon={<CgTapSingle />}
              header="API Integration"
              par="I integrate REST APIs, GraphQL, payment gateways (PayPal, Paymob), real-time SDKs (Agora), and cloud services (AWS S3) into production applications."
              index={5}
            />
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
