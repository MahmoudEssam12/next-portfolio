import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./scss/Projects.module.scss";

interface ProjectCardProps {
  title: string;
  summary: string;
  imgSrc: string;
  onClick: (rect: DOMRect) => void;
}

function ProjectCard({ title, summary, imgSrc, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (cardRef.current) {
      onClick(cardRef.current.getBoundingClientRect());
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onClick={handleClick}
    >
      <div className={styles.card_image}>
        <picture>
          <img src={imgSrc} alt={title} loading="lazy" />
        </picture>
      </div>
      <div className={styles.card_body}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
