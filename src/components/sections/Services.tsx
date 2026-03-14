import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaSearchengin, FaDev, FaCode } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { CgPerformance, CgTapSingle } from "react-icons/cg";
import Card from "../Card";
import styles from "../scss/Services.module.scss";

function Services() {
  return (
    <section className={`section ${styles.services_section}`} id="services">
      <Container>
        <div className="section-header">
          <h2>What I Do</h2>
          <p>
            From pixel-perfect UIs to scalable architectures — here&apos;s what
            I bring to every project.
          </p>
        </div>

        <Row>
          <Card
            icon={<FaSearchengin />}
            header="SEO & Performance"
            par="I optimize for search engines with semantic HTML, structured data, SSR/SSG with Next.js, and Core Web Vitals tuning to maximize discoverability."
          />
          <Card
            icon={<GoDeviceMobile />}
            header="Responsive Design"
            par="Every interface I build is mobile-first and adapts fluidly across devices and screen sizes using modern CSS and component-driven layouts."
          />
          <Card
            icon={<FaDev />}
            header="Web Applications"
            par="From e-commerce platforms and freelancing marketplaces to real-time collaboration tools — I build full-featured web apps with React, Next.js, Vue, and Angular."
          />
          <Card
            icon={<FaCode />}
            header="Clean & Maintainable Code"
            par="I write well-structured, typed code with TypeScript, follow component-driven architecture, and build reusable UI libraries for long-term maintainability."
          />
          <Card
            icon={<CgPerformance />}
            header="Performance Optimization"
            par="Lazy loading, code splitting, caching strategies, image optimization, and efficient rendering — I ensure fast load times and smooth user experiences."
          />
          <Card
            icon={<CgTapSingle />}
            header="API Integration"
            par="I integrate REST APIs, GraphQL, payment gateways (PayPal, Paymob), real-time SDKs (Agora), and cloud services (AWS S3) into production applications."
          />
        </Row>
      </Container>
    </section>
  );
}

export default Services;
