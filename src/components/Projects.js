import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub } from "react-icons/fa";
import styles from "./scss/Projects.module.scss";
function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
  let projects = [
    {
      title: "La Douce",
      details:
        "large-scale multi-vendor e-commerce platform using Next.js, Redux, SWR, MUI, Formik, Yup, and next-auth",
      imgSrc: "/images/ladouce.webp",
      url: "https://la-doucee.com/auth/login",
      githubLink: "#",
    },
    {
      title: "Jobber",
      details:
        "a comprehensive job seeker platform with integrated hiring capabilities and a course marketplace. under development",
      imgSrc: "/images/jobber.webp",
      url: "https://jobber-liart.vercel.app/",
      githubLink: "https://github.com/MahmoudEssam12/cleaning-service",
    },
    {
      title: "Procleana",
      details:
        "cleaning service website i used Vue.js,html,scss it's in Arabic and English",
      imgSrc: "/images/procleana.webp",
      url: "https://procleana.netlify.app/",
      githubLink: "https://github.com/MahmoudEssam12/cleaning-service",
    },
    {
      title: "Lego clone",
      details:
        "Graduation Project from ITI i made the UI , Frontend and Backend for the admin dashboard and shipper dashboard, UI for login and signup pages ... I used React.js,MUI,Express,Mongodb",
      imgSrc: "/images/lego.webp",
      url: "https://lego-iti.netlify.app/",
      githubLink: "https://github.com/ma7moudemam/lego",
    },
    {
      title: "IMME (I'm Mahmoud Essam)",
      details:
        "Movie app project like IMDB i made it to use Redux and context api using TMDB service",
      imgSrc: "/images/imme.webp",
      url: "https://imme.netlify.app/",
      githubLink: "https://github.com/MahmoudEssam12/movie-app",
    },
    {
      title: "Space Tourism",
      details:
        "3 hours challenge from front end mentor using vanilla javascript without any plugins instead of animations with gsap",
      imgSrc: "/images/space.webp",
      url: "https://space-tourism99.netlify.app/",
      githubLink: "https://github.com/MahmoudEssam12/space-tourism",
    },
    {
      title: "Rock,Paper,Scissors",
      details: "Frontend mentor challenge using Vanillajs,css,html",
      imgSrc: "/images/rock-paper.webp",
      url: "https://rockpaperscissorsme.netlify.app/",
      githubLink: "https://github.com/MahmoudEssam12/rockPaperScissors",
    },
    {
      title: "Royalux",
      details:
        "Frontend template for hotel with custom animation using vanilla javascript,html,scss",
      imgSrc: "/images/hotels.webp",
      url: "https://royalux.netlify.app/",
      githubLink: "https://github.com/MahmoudEssam12/hotels",
    },
    {
      title: "Netflix landing page",
      details:
        "Netflix landing page clone using api to get data when you click on movie you can watch the trailer i used React.js,scss",
      imgSrc: "/images/netlfix.webp",
      url: "https://netlfix-clone-36e18.web.app/",
      githubLink: "https://github.com/MahmoudEssam12/netflix",
    },
    {
      title: "Instagram clone",
      details:
        "Instagram clone you can create an account and write posts it will appear to every one i used React.js,scss,firebase",
      imgSrc: "/images/insta.webp",
      url: "https://instagram-clone-7891b.web.app/",
      githubLink: "https://github.com/MahmoudEssam12/instagram",
    },
  ];
  return (
    <section className="section" id="projects">
      <Container>
        <div className="section-header">
          <h2>My Latest Project</h2>
          <p>
            My latest but not my least projects, every project i used something
            new to create it some of them has been made with Vue.js and others
            with React.js and some with vanilla js
          </p>
        </div>
        <Carousel responsive={responsive}>
          {projects.map((project, index) => (
            <div className={styles.project_wrapper} key={index}>
              <div className={styles.proj_bg}>
                <picture>
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.details}</p>
                <a
                  href={project.githubLink}
                  className={styles.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a href={project.url} rel="noopener noreferrer" target="_blank">
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Projects;
