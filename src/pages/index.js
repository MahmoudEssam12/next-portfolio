import Head from 'next/head'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Services from '../components/Services'
import Projects from '../components/Projects'
import HireMe from '../components/HireMe'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mahmoud Essam</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Mahmoud Essam" />
        <meta name="description"
          content="Mahmoud Essam portfolio, you will see my latest projects , my skills and my resume . here you will find my frontend , backend and fullstack projects . and you can contact me from the form in the bottom of the page." />
        <meta name="keywords"
          content="mahmoud,essam,mamoudessam,react,portfolio,essaminreact,previous work, frontend developer, backend developer, fullstack web developer, restful api, rest api, react.js, angular, node.js, mongodb, express.js, MEARN stack developer." />
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
