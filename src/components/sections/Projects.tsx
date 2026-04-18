import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";
import styles from "../scss/Projects.module.scss";
import { projects, type Project } from "../../data/projects";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const carouselEntrance = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.2,
    },
  },
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const handleCardClick = (project: Project, rect: DOMRect) => {
    setSourceRect(rect);
    setSelectedProject(project);
  };

  return (
    <section className="section" id="projects">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>Projects</h2>
          <p>
            A mix of professional work and personal side projects. The
            professional projects were built during my time at{" "}
            <strong>Uniparticle</strong> and <strong>Rasan</strong>, covering
            e-commerce platforms, freelancing marketplaces, real-time
            collaboration tools, and insurance aggregators. The rest are
            personal side projects built on my own time.
          </p>
        </motion.div>
        <motion.div
          variants={carouselEntrance}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            pauseOnHover
            className={styles.carousel}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                summary={project.summary}
                imgSrc={project.imgSrc}
                onClick={(rect) => handleCardClick(project, rect)}
              />
            ))}
          </Carousel>
        </motion.div>
      </Container>

      <ProjectModal
        project={selectedProject}
        sourceRect={sourceRect}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
