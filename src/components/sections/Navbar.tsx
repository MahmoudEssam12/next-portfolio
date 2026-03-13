import React, { useState, useEffect, useRef } from "react";
import { MenuItems } from "../MenuItems";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import styles from "../scss/Navbar.module.scss";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const updatingState = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else setSticky(false);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      updatingState();
    });
  }, []);

  const navbarRef = useRef<HTMLElement>(null);
  const firstLine = useRef<HTMLDivElement>(null);
  const secondLine = useRef<HTMLDivElement>(null);
  const thirdLine = useRef<HTMLDivElement>(null);
  const navLinks = useRef<HTMLUListElement>(null);

  const toggle = () => {
    setOpen(!open);
  };

  const navbarAnimation = () => {
    if (open) {
      gsap.to(firstLine.current, {
        y: 8,
        rotation: "45deg",
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(secondLine.current, {
        x: 10,
        opacity: 0,
        ease: "expo.out",
        duration: 0.1,
      });
      gsap.to(thirdLine.current, {
        y: "-8",
        rotation: "-45deg",
        duration: 0.1,
        ease: "power2.out",
      });
      const navLinksTl = gsap.timeline({ repeat: 0 });
      navLinksTl.to(navLinks.current, {
        clipPath: "circle(1000px at 90% -10%)",
        pointerEvents: "all",
        duration: 0.1,
      });
      navLinksTl.to(".responsiveNavItem", {
        y: 40,
        duration: 0.1,
        ease: "back.easeOut.config(4)",
        opacity: 1,
      });
    } else {
      gsap.to(navLinks.current, {
        clipPath: "circle(66px at 90% -10%)",
        pointerEvents: "none",
        duration: 0.1,
      });
      gsap.to(".responsiveNavItem", {
        opacity: 0,
        y: 0,
        ease: "back.easeOut.config(4)",
        duration: 0.1,
        stagger: 0.1,
      });

      gsap.to(firstLine.current, {
        y: 0,
        rotation: 0,
        duration: 0.2,
      });
      gsap.to(secondLine.current, {
        x: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 0.2,
      });
      gsap.to(thirdLine.current, {
        y: 0,
        rotation: 0,
        duration: 0.2,
      });
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      navbarAnimation();
    }
  });

  const linkActive = () => {
    setOpen(false);

    if (window.innerWidth <= 768) {
      gsap.to(navLinks.current, {
        clipPath: "circle(66px at 90% -10%)",
        pointerEvents: "none",
        duration: 0.1,
      });
      gsap.to(".responsiveNavItem", {
        opacity: 0,
        y: 0,
        ease: "back.easeOut.config(4)",
        duration: 0.1,
        stagger: 0.1,
      });

      gsap.to(firstLine.current, {
        y: 0,
        rotation: 0,
        duration: 0.2,
      });
      gsap.to(secondLine.current, {
        x: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 0.2,
      });
      gsap.to(thirdLine.current, {
        y: 0,
        rotation: 0,
        duration: 0.2,
      });
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav
        className={`${styles.nav} ${sticky ? styles.sticky : ""}`}
        ref={navbarRef}
      >
        <div className={styles.hamburger} onClick={toggle}>
          <div className={`${styles.line} f`} ref={firstLine}></div>
          <div className={`${styles.line} s`} ref={secondLine}></div>
          <div className={`${styles.line} t`} ref={thirdLine}></div>
        </div>
        <div className={styles.social_icons}>
          <a href="https://www.facebook.com/mahmoud.essam.1422/">
            <FaFacebookF />
          </a>
          <a href="https://github.com/MahmoudEssam12">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mahmoud-essam-956898182/">
            <FaLinkedinIn />
          </a>
        </div>
        <ul className={styles.nav_links} ref={navLinks}>
          {MenuItems.map((item, index) => (
            <li key={index} className="responsiveNavItem">
              <Link
                to={item.url}
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-70}
                onClick={linkActive}
                duration={500}
                className="cnav-link"
                href={"#" + item.url}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
