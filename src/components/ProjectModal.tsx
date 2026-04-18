import { useEffect, useCallback } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./scss/Projects.module.scss";
import { type Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  sourceRect: DOMRect | null;
  onClose: () => void;
}

function ProjectModal({ project, sourceRect, onClose }: ProjectModalProps) {
  const transform = (() => {
    if (!sourceRect) return { x: 0, y: 0, scale: 0.85 };
    const modalWidth = Math.min(620, window.innerWidth - 48);
    const cardCenterX = sourceRect.left + sourceRect.width / 2;
    const cardCenterY = sourceRect.top + sourceRect.height / 2;
    return {
      x: cardCenterX - window.innerWidth / 2,
      y: cardCenterY - window.innerHeight / 2,
      scale: sourceRect.width / modalWidth,
    };
  })();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.modal_backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal_content}
            initial={{
              x: transform.x,
              y: transform.y,
              scale: transform.scale,
              borderRadius: 14,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              borderRadius: 14,
            }}
            exit={{
              x: transform.x,
              y: transform.y,
              scale: transform.scale,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 32,
              opacity: { duration: 0.2 },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className={styles.modal_close}
              onClick={onClose}
              aria-label="Close modal"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <FaTimes />
            </motion.button>

            <div className={styles.modal_image}>
              <picture>
                <img src={project.imgSrc} alt={project.title} />
              </picture>
            </div>

            <motion.div
              className={styles.modal_body}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              {(project.position || project.company) && (
                <div className={styles.modal_meta}>
                  {project.position && (
                    <span className={styles.modal_meta_position}>{project.position}</span>
                  )}
                  {project.position && project.company && (
                    <span className={styles.modal_meta_sep}>·</span>
                  )}
                  {project.company && <span>{project.company}</span>}
                </div>
              )}
              <p>{project.details || project.summary}</p>

              <div className={styles.card_techs}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.card_tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {(project.url || project.githubLink) && (
                <div className={styles.modal_links}>
                  {project.url && (
                    <a
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.modal_link}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.modal_link}
                    >
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
