import React from 'react'
import { Col } from "react-bootstrap";
import styles from './scss/Card.module.scss'
function Card({ icon, header, par }) {
    return (
        <Col lg={4} md={6} style={{ display: "flex" }}>
            <div className={styles.card_wrapper}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <h3>{header}</h3>
                <p>
                    {par}
                </p>
            </div>
        </Col>
    )
}

export default Card
