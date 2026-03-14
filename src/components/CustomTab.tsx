import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./scss/About.module.scss";

interface TabDetail {
  title: string;
  subTitle: string;
  snippet: string;
  duration?: string;
  technologies?: string[];
}

interface Tab {
  label: string;
  details: TabDetail[];
}

const tabs: Tab[] = [
  {
    label: "Skills",
    details: [
      {
        title: "Frontend Development",
        subTitle: "",
        snippet:
          "Building performant, accessible user interfaces with modern frameworks and libraries.",
        technologies: [
          "React",
          "Next.js",
          "Vue 3",
          "Angular",
          "TypeScript",
          "JavaScript",
          "Redux",
          "Tanstack Query",
          "Vuex",
          "Pinia",
          "jQuery",
        ],
      },
      {
        title: "Backend & Databases",
        subTitle: "",
        snippet:
          "Server-side development, REST APIs, and data persistence with relational and document databases.",
        technologies: [
          "Node.js",
          "Express",
          "Fastify",
          "PostgreSQL",
          "MongoDB / NoSQL",
          "GraphQL",
        ],
      },
      {
        title: "DevOps & Tools",
        subTitle: "",
        snippet:
          "Version control, containerization, cloud services, and CI/CD pipelines.",
        technologies: ["Git", "Docker", "AWS (S3)", "Nginx", "PM2"],
      },
    ],
  },
  {
    label: "Experience",
    details: [
      {
        title: "Frontend Developer",
        duration: "Jul 2023 – Present",
        subTitle: " — Uniparticle",
        snippet:
          "Enhanced educational and freelancing platforms with improved interfaces. Integrated real-time video calling and chat using Agora SDK. Built reusable UI component libraries ensuring consistency across applications. Contributed as a fullstack developer with Angular and Fastify on the Loha dashboard project.",
        technologies: [
          "React",
          "Next.js",
          "Angular",
          "Fastify",
          "Agora SDK",
          "AWS S3",
        ],
      },
      {
        title: "Frontend Developer",
        duration: "Dec 2022 – Jul 2023",
        subTitle: " — Ongoing Business Development",
        snippet:
          "Built a multi-vendor e-commerce platform with a custom dashboard featuring role-based access control. Developed reusable UI components and dashboards for freelancing and e-learning platforms. Maintained and enhanced existing e-commerce products, improving stability and performance.",
        technologies: [
          "React",
          "Next.js",
          "Redux",
          "Material UI",
          "AWS S3",
        ],
      },
      {
        title: "Frontend Developer",
        duration: "Jul 2022 – Dec 2022",
        subTitle: " — Fourth Pyramid",
        snippet:
          "Enhanced and modernized existing websites, improving UI and functionality. Developed e-commerce platforms from scratch ensuring performance and scalability. Created and customized WordPress themes tailored to business needs.",
        technologies: [
          "React",
          "Next.js",
          "Vue.js",
          "Redux",
          "PrimeReact",
        ],
      },
    ],
  },
  {
    label: "Projects",
    details: [
      {
        title: "Aman Web Stores",
        duration: "Jul 2023",
        subTitle: " — E-commerce Platform",
        snippet:
          "Mobile-first responsive e-commerce UI with advanced Magento search filtering, lazy loading, a secure checkout process with multiple payment gateways (cash, card, Aman card installments), and OCR-based document verification. Set up Docker for local development and CI/CD.",
        technologies: ["React", "Next.js", "Magento", "Docker"],
      },
      {
        title: "Zoop EGate",
        duration: "Aug 2024",
        subTitle: " — Freelancing Platform",
        snippet:
          "Monorepo with service-provider and service-receiver apps sharing common UI components. Integrated AWS S3 for file storage, PayPal Braintree for payments (PayPal, Google Wallet, Apple Pay), and Agora SDK for real-time video conferencing and chat.",
        technologies: [
          "React",
          "ShadCN UI",
          "TailwindCSS",
          "AWS S3",
          "Agora SDK",
        ],
      },
      {
        title: "Glancers",
        duration: "Mar 2024",
        subTitle: " — Freelancing Platform",
        snippet:
          "Upwork-style freelancing platform with a community module (posts, real-time chat), Paymob payment gateway, AWS S3 file uploads, and deployed via Nginx + PM2 for SSR.",
        technologies: ["React", "Next.js", "Firebase", "AWS S3", "Nginx"],
      },
      {
        title: "Mafaza",
        duration: "Oct 2023",
        subTitle: " — Location-based App",
        snippet:
          "Optimized map rendering and location detection in dense urban areas. Designed custom animations and loaders, applied code splitting and caching strategies, and ensured seamless SSR/CSR integration for faster load times and SEO.",
        technologies: ["React", "Next.js", "Firebase", "Google Maps"],
      },
      {
        title: "Loha Dashboard",
        duration: "Mar 2025",
        subTitle: " — Admin Dashboard (Fullstack)",
        snippet:
          "Collaborated in a fullstack role building an admin dashboard with Angular on the frontend and Fastify + Postgres on the backend. Integrated frontend with backend APIs, handling data flow and business logic.",
        technologies: ["Angular", "Fastify", "Node.js", "PostgreSQL"],
      },
    ],
  },
  {
    label: "Education",
    details: [
      {
        title: "MERN Fullstack Diploma",
        subTitle: " — ITI (Information Technology Institute)",
        snippet:
          "Intensive code camp covering front-end development with HTML, CSS, JavaScript and React, plus back-end development with Node.js, MongoDB, and Express.",
      },
      {
        title: "Web Development Nanodegrees",
        subTitle: " — Udacity / Egfwd",
        snippet:
          "Completed Web Development Professional and Web Development Advanced tracks.",
      },
      {
        title: "Continuous Self-learning",
        subTitle: "",
        snippet:
          "Constantly expanding skills through online resources, documentation, and open-source contributions (Traversy Media, The Net Ninja, Elzero Web School, and more).",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

function CustomTab() {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <div>
      <div>
        <ul className={styles.info_nav}>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`${styles.nav_tab} ${
                item === selectedTab ? styles.selected : ""
              }`}
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
              {item === selectedTab ? (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <main className="detailed-info">
        <AnimatePresence mode="wait">
          <motion.ul
            key={selectedTab.label}
            className={styles.details_list}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {selectedTab.details.map((item) => (
              <motion.li key={`${item.title}${item.subTitle}`} variants={itemVariants}>
                <div>
                  <strong>{item.title}</strong>
                  {item.duration && (
                    <span className={styles.duration}>{item.duration}</span>
                  )}
                  <span>{item.subTitle}</span>
                </div>
                <p className={styles.snippet_text}>{item.snippet}</p>
                {item.technologies && (
                  <div className={styles.tech_tags}>
                    {item.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className={styles.tech_tag}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default CustomTab;
