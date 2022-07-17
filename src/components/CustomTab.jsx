import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./scss/About.module.scss";

function CustomTab() {
  // eslint-disable-next-line no-unused-vars
  const [tabs, setTabs] = useState([
    {
      label: "Main skills",
      details: [
        {
          title: "User experience development",
          subTitle: " - Frontend",
          snippet:
            "Delight the user and make it work with HTML,scss,js,I use React.js, Vue.js and Angular",
        },
        {
          title: "Server-side",
          subTitle: " - Backend",
          snippet: "I use Javascirpt for backend using Node.js and express",
        },
        {
          title: "Database",
          subTitle: "",
          snippet: " MongoDB for the DB",
        },
        {
          title: "Interaction design",
          subTitle: " - Animation",
          snippet: "I like to move things with sass and javascript",
        },
      ],
    },
    {
      label: "Experiance",
      details: [
        {
          title: "Front-End Developer",
          subTitle: " - Internship",
          snippet: "Jan 2020 - Mar 2020 internship at Ipda3 tech",
        },
        {
          title: "Wordpress Develper",
          subTitle: " - The Fourth Pyramid",
          snippet:
            "worked as a wordpress theme developer with php from Mar 2020 - May 2020",
        },
        {
          title: "Front-End Developer",
          subTitle: " - The Fourth Pyramid",
          snippet: "worked as a frontend from Jan 2020 - Jul 2020",
        },
        {
          title: "Fullstack Web Developer",
          subTitle: " - ITI intensive code camp",
          snippet: "worked as a Fullstack using MEARN from Dec 2021 - Apr 2022",
        },
      ],
    },
    {
      label: "Education",
      details: [
        {
          title: "ITI - Intensive Code Camp",
          subTitle: " - FullStack using Mearn",
          snippet:
            "I spent nearly 5 months working and learning under massive stress on fullstack websites using MEARN",
        },
        {
          title: "Udacity",
          subTitle: "",
          snippet:
            "I studied two courses by Egfwd on udacity (Web Development Professional, Web Development Advanced)",
        },
        {
          title: "Self Educated",
          subTitle: " - FullStack using Mearn",
          snippet:
            "i sutdied programming from multiple online resources and books ex: (Traversy media, The net Ninja , Elzero web school, etc...)",
        },
        {
          title: "Faculty of commerce",
          subTitle: "",
          snippet:
            "I shifted my career to programming field because that's where my passion is.",
        },
      ],
    },
  ]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <div>
        <ul className={styles.info_nav}>
          {tabs.map((item, index) => (
            <li
              key={index}
              className={`${styles.nav_tab} ${
                item === selectedTab ? styles.selected : ""
              }`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <main className="detailed-info">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? (
              <ul className={styles.details_list}>
                {selectedTab.details.map((item, index) => (
                  <li key={index}>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.subTitle}</span>
                    </div>
                    {item.snippet}
                  </li>
                ))}
              </ul>
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default CustomTab;
