import Head from 'next/head'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Services from '../components/Services'
import Projects from '../components/Projects'
import HireMe from '../components/HireMe'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')

const defaultMeta = {
  title: 'Mahmoud Essam — Frontend & Fullstack Developer',
  description: 'Portfolio of Mahmoud Essam, Frontend and Fullstack JavaScript developer from Egypt. React, Next.js, Node.js projects, skills, and contact.',
  image: '/images/avatar.webp',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahmoud Essam Fathy Rashed',
  jobTitle: 'Frontend & Fullstack Web Developer',
  ...(SITE_URL && { url: SITE_URL }),
  nationality: { '@type': 'Country', name: 'Egypt' },
  knowsAbout: ['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'REST API', 'Frontend Development', 'Fullstack Development'],
  description: defaultMeta.description,
}

export default function Home() {
  const canonicalUrl = SITE_URL ? `${SITE_URL}/` : ''
  return (
    <div className={styles.container}>
      <Head>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content="Mahmoud Essam, frontend developer Egypt, fullstack developer, JavaScript, React, Next.js, Node.js, web developer portfolio" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || undefined} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:image" content={SITE_URL ? `${SITE_URL}${defaultMeta.image}` : defaultMeta.image} />
        <meta property="og:site_name" content="Mahmoud Essam Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta name="twitter:image" content={SITE_URL ? `${SITE_URL}${defaultMeta.image}` : defaultMeta.image} />

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
  )
}
