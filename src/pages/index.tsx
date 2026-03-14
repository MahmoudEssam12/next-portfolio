import Head from "next/head";
import Navbar from "../components/sections/Navbar";
import AboutMe from "../components/sections/AboutMe";
import Header from "../components/sections/Header";
import styles from "../styles/Home.module.css";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import HireMe from "../components/sections/HireMe";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

const defaultMeta = {
  title: "Mahmoud Essam — Frontend Developer | React, Next.js, TypeScript",
  description:
    "Portfolio of Mahmoud Essam, a Frontend Developer with 3+ years of experience building e-commerce platforms, freelancing marketplaces, and real-time apps with React, Next.js, TypeScript, Vue, and Angular.",
  image: "/images/avatar.webp",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahmoud Essam Rashed",
  jobTitle: "Frontend Developer",
  ...(SITE_URL && { url: SITE_URL }),
  nationality: { "@type": "Country", name: "Egypt" },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Vue.js",
    "Angular",
    "Redux",
    "Tanstack React Query",
    "Node.js",
    "Express",
    "Fastify",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "GraphQL",
    "Frontend Development",
    "Fullstack Development",
  ],
  description: defaultMeta.description,
};

export default function Home() {
  const canonicalUrl = SITE_URL ? `${SITE_URL}/` : "";
  return (
    <div className={styles.container}>
      <Head>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta
          name="keywords"
          content="Mahmoud Essam, frontend developer Egypt, React developer, Next.js, TypeScript, Vue.js, Angular, fullstack developer, web developer portfolio, Cairo"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || undefined} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta
          property="og:image"
          content={
            SITE_URL
              ? `${SITE_URL}${defaultMeta.image}`
              : defaultMeta.image
          }
        />
        <meta property="og:site_name" content="Mahmoud Essam Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta
          name="twitter:image"
          content={
            SITE_URL
              ? `${SITE_URL}${defaultMeta.image}`
              : defaultMeta.image
          }
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Projects />
      <HireMe />
    </div>
  );
}
