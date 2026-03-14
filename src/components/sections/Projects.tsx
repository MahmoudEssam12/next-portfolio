import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../scss/Projects.module.scss";

interface Project {
  title: string;
  details: string;
  imgSrc: string;
  url: string;
  githubLink: string;
  technologies: string[];
}

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

const projects: Project[] = [
  {
    title: "La Douce",
    details:
      "Multi-vendor e-commerce platform with product management, auth, and a full admin dashboard.",
    imgSrc: "/images/ladouce.webp",
    url: "https://la-doucee.com/auth/login",
    githubLink: "#",
    technologies: ["Next.js", "Redux", "SWR", "MUI"],
  },
  {
    title: "Jobber",
    details:
      "Job seeker platform with integrated hiring capabilities, course marketplace, and recruiter tools.",
    imgSrc: "/images/jobber.webp",
    url: "https://jobber-liart.vercel.app/",
    githubLink: "https://github.com/MahmoudEssam12/cleaning-service",
    technologies: ["React", "Next.js", "SCSS"],
  },
  {
    title: "Procleana",
    details:
      "Bilingual (AR/EN) cleaning service website with service booking and responsive layout.",
    imgSrc: "/images/procleana.webp",
    url: "https://procleana.netlify.app/",
    githubLink: "https://github.com/MahmoudEssam12/cleaning-service",
    technologies: ["Vue.js", "SCSS", "i18n"],
  },
  {
    title: "Lego Clone",
    details:
      "ITI graduation project — full e-commerce with admin and shipper dashboards, auth, and cart.",
    imgSrc: "/images/lego.webp",
    url: "https://lego-iti.netlify.app/",
    githubLink: "https://github.com/ma7moudemam/lego",
    technologies: ["React", "MUI", "Express", "MongoDB"],
  },
  {
    title: "IMME",
    details:
      "Movie discovery app (IMDB-style) using TMDB API with Redux state management and search.",
    imgSrc: "/images/imme.webp",
    url: "https://imme.netlify.app/",
    githubLink: "https://github.com/MahmoudEssam12/movie-app",
    technologies: ["React", "Redux", "TMDB API"],
  },
  {
    title: "Space Tourism",
    details:
      "Frontend Mentor challenge built in 3 hours with vanilla JS and GSAP page transitions.",
    imgSrc: "/images/space.webp",
    url: "https://space-tourism99.netlify.app/",
    githubLink: "https://github.com/MahmoudEssam12/space-tourism",
    technologies: ["JavaScript", "GSAP", "CSS"],
  },
  {
    title: "Rock Paper Scissors",
    details:
      "Interactive game with score tracking and animated transitions, built with vanilla JS.",
    imgSrc: "/images/rock-paper.webp",
    url: "https://rockpaperscissorsme.netlify.app/",
    githubLink: "https://github.com/MahmoudEssam12/rockPaperScissors",
    technologies: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Royalux",
    details:
      "Hotel landing page with custom scroll-driven animations and parallax sections.",
    imgSrc: "/images/hotels.webp",
    url: "https://royalux.netlify.app/",
    githubLink: "https://github.com/MahmoudEssam12/hotels",
    technologies: ["JavaScript", "SCSS", "HTML"],
  },
  {
    title: "Netflix Clone",
    details:
      "Netflix landing page clone with live API data — click any movie to watch its trailer.",
    imgSrc: "/images/netlfix.webp",
    url: "https://netlfix-clone-36e18.web.app/",
    githubLink: "https://github.com/MahmoudEssam12/netflix",
    technologies: ["React", "SCSS", "TMDB API"],
  },
  {
    title: "Instagram Clone",
    details:
      "Social platform clone with user auth, post creation, and a real-time feed using Firebase.",
    imgSrc: "/images/insta.webp",
    url: "https://instagram-clone-7891b.web.app/",
    githubLink: "https://github.com/MahmoudEssam12/instagram",
    technologies: ["React", "SCSS", "Firebase"],
  },
];

function Projects() {
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
          <h2>Personal &amp; Side Projects</h2>
          <p>
            A selection of personal projects built with React, Next.js, Vue.js
            and vanilla JS. For professional work — including e-commerce
            platforms, freelancing marketplaces, and real-time apps — check the
            Projects tab in the About section above.
          </p>
        </motion.div>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          pauseOnHover
          className={styles.carousel}
        >
          {projects.map((project) => (
            <div className={styles.card} key={project.title}>
              <div className={styles.card_image}>
                <picture>
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    loading="lazy"
                  />
                </picture>
                <div className={styles.card_overlay}>
                  <div className={styles.card_actions}>
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`${project.title} GitHub`}
                        className={styles.action_btn}
                      >
                        <FaGithub />
                      </a>
                    )}
                    <a
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={`Visit ${project.title}`}
                      className={styles.action_btn}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.card_body}>
                <h3>{project.title}</h3>
                <p>{project.details}</p>
                <div className={styles.card_techs}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.card_tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Projects;
