import React, { ReactNode } from "react";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./scss/Card.module.scss";

interface CardProps {
  icon: ReactNode;
  header: string;
  par: string;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

function Card({ icon, header, par, index = 0 }: CardProps) {
  return (
    <Col lg={4} md={6} style={{ display: "flex" }}>
      <motion.div
        className={styles.card_wrapper}
        variants={cardVariants}
        custom={index}
        whileHover={{ y: -8, transition: { duration: 0.25 } }}
      >
        <div className={styles.icon}>{icon}</div>
        <h3>{header}</h3>
        <p>{par}</p>
      </motion.div>
    </Col>
  );
}

export default Card;
