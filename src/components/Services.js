import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaSearchengin, FaDev, FaCode } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { CgPerformance, CgTapSingle } from "react-icons/cg";
import Card from "./Card";
import styles from "./scss/Services.module.scss";

function Services() {
  return (
    <section className={`section ${styles.services_section}`} id="services">
      <Container>
        <div className="section-header">
          <h2>My Awesome Service</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        <Row>
          <Card
            icon={<FaSearchengin />}
            header="SEO"
            par="Search engine optimization i improve the quality and quantity of website traffic to a website or a web page from search engines."
          />
          <Card
            icon={<GoDeviceMobile />}
            header="Responsive Design"
            par="I create web pages that look good on all devices and all screens,the web page will automatically adjust for different screen sizes."
          />
          <Card
            icon={<FaDev />}
            header="Website Development"
            par="I can develope websites from range from simple single static page of plain text to complex web applications."
          />
          <Card
            icon={<FaCode />}
            header="Clean Code"
            par="My code is clean it can be understood easily – by everyone on the team. My code can be read by a developer working after me."
          />
          <Card
            icon={<CgPerformance />}
            header="High Performance"
            par="My websites performance is high .. i optimize my code and their is some techniques like lazyloading, minifying css and js files"
          />
          <Card
            icon={<CgTapSingle />}
            header="RESTFull API"
            par="I create a highly performance REST Apis using node.js with strong validations and professional authorizations."
          />
        </Row>
      </Container>
    </section>
  );
}

export default Services;
