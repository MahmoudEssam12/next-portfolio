import React, { useState, useEffect, useRef } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-scroll";
import { gsap } from 'gsap';
import styles from "./scss/Navbar.module.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const updatingState = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true)
      } else setSticky(false)
    })
  }
  useEffect(() => {

    window.addEventListener("scroll", () => {
      updatingState()
    })


  }, []);


  const navbarRef = useRef()
  const firstLine = useRef();
  const secondLine = useRef();
  const thirdLine = useRef()
  const navLinks = useRef();
  const navItem = useRef();
  const toggle = () => {
    setOpen(!open);
    //gsap timeline 

  };

  const navbarAnimation = () => {
    if (open) {

      gsap.to(firstLine.current, {
        y: 8,
        rotation: '45deg',
        duration: .1,
        ease: "power2.out"
      })
      gsap.to(secondLine.current, {
        x: 10,
        opacity: 0,
        ease: 'expo.out',
        duration: .1
      }, '<')
      gsap.to(thirdLine.current, {
        y: '-8',
        rotation: '-45deg',
        duration: .1,
        ease: "power2.out"
      })
      // animating the clippath circle for the menu icon
      const navLinksTl = gsap.timeline({ repeat: 0 });
      navLinksTl.to(navLinks.current, {
        "clipPath": "circle(1000px at 90% -10%)",
        'pointerEvents': 'all',
        duration: .1,
      })
      // animating the menu links 
      navLinksTl.to(".responsiveNavItem", {
        y: 40,
        duration: .1,
        ease: "back.easeOut.config(4)",
        opacity: 1
      })
    } else {

      // undoing the animation for the clip path circle
      gsap.to(navLinks.current, {
        "clipPath": "circle(66px at 90% -10%)",
        'pointerEvents': 'none',
        duration: .1,
      })
      // undoing the animation for the menu links
      gsap.to(".responsiveNavItem", {
        opacity: 0,
        y: 0,
        ease: "back.easeOut.config(4)",
        duration: .1,
        stagger: .1,
      })
      // undoing the animation for the burger menu item

      gsap.to(firstLine.current, {
        y: 0,
        rotation: 0,
        duration: .2
      })
      gsap.to(secondLine.current, {
        x: 0,
        opacity: 1,
        ease: 'expo.out',
        duration: .2
      })
      gsap.to(thirdLine.current, {
        y: 0,
        rotation: 0,
        duration: .2
      })
    }
  }

  useEffect(() => {

    if (window.innerWidth <= 768) {
      navbarAnimation()
    }

  })


  const linkActive = () => {
    setOpen(false)

    if (window.innerWidth <= 768) {
      // undoing the animation for the clip path circle
      gsap.to(navLinks, {
        "clipPath": "circle(66px at 90% -10%)",
        'pointerEvents': 'none',
        duration: .1,
      })
      // undoing the animation for the menu links
      gsap.to('.responsiveNavItem', {
        opacity: 0,
        y: 0,
        ease: "back.easeOut.config(4)",
        duration: .1,
        stagger: .1,
      })
      // undoing the animation for the burger menu item

      gsap.to(firstLine.current, {
        y: 0,
        rotation: 0,
        duration: .2
      })
      gsap.to(secondLine.current, {
        x: 0,
        opacity: 1,
        ease: 'expo.out',
        duration: .2
      })
      gsap.to(thirdLine.current, {
        y: 0,
        rotation: 0,
        duration: .2
      })
    }

  }

  return (
    <div className="navbar-wrapper">
      <nav className={`${styles.nav} ${sticky ? styles.sticky : ''}`} ref={navbarRef}>
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
              <Link to={item.url} activeClass={styles.active} spy={true}
                smooth={true}
                offset={-70}
                onClick={linkActive}
                duration={500}
                className="cnav-link">{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
