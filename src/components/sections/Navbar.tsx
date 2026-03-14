import React, { useState, useEffect, useRef, useCallback } from "react";
import { MenuItems } from "../MenuItems";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import styles from "../scss/Navbar.module.scss";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SCROLL_THRESHOLD = 100;
const MOBILE_BREAKPOINT = 768;

const socialLinks = [
  {
    href: "https://www.facebook.com/mahmoud.essam.1422/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://github.com/MahmoudEssam12",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mahmoud-essam-956898182/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
] as const;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const firstLine = useRef<HTMLDivElement>(null);
  const secondLine = useRef<HTMLDivElement>(null);
  const thirdLine = useRef<HTMLDivElement>(null);
  const navLinks = useRef<HTMLUListElement>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navbarRef.current) return;
    if (sticky) {
      gsap.fromTo(
        navbarRef.current,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [sticky]);

  const wasMobile = useRef(false);

  useEffect(() => {
    wasMobile.current = window.innerWidth <= MOBILE_BREAKPOINT;

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
        if (wasMobile.current && !mobile) {
          menuTl.current?.kill();
          menuTl.current = null;

          const targets = [
            navLinks.current,
            firstLine.current,
            secondLine.current,
            thirdLine.current,
          ].filter(Boolean);
          gsap.set(targets, { clearProps: "all" });
          gsap.set(".responsiveNavItem", { clearProps: "all" });

          setOpen(false);
        }
        wasMobile.current = mobile;
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;

  const animateOpen = useCallback(() => {
    menuTl.current?.kill();

    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });
    menuTl.current = tl;

    tl.to(
      firstLine.current,
      { y: 8, rotation: 45, duration: 0.35, ease: "elastic.out(1, 0.5)" },
      0
    );
    tl.to(
      secondLine.current,
      { scaleX: 0, opacity: 0, duration: 0.2, ease: "power3.in" },
      0
    );
    tl.to(
      thirdLine.current,
      { y: -8, rotation: -45, duration: 0.35, ease: "elastic.out(1, 0.5)" },
      0
    );

    tl.to(
      navLinks.current,
      {
        clipPath: "circle(1500px at 90% -10%)",
        pointerEvents: "all",
        duration: 0.65,
        ease: "power4.inOut",
      },
      0.1
    );

    tl.fromTo(
      ".responsiveNavItem",
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.07,
      },
      0.3
    );
  }, []);

  const animateClose = useCallback(() => {
    menuTl.current?.kill();

    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });
    menuTl.current = tl;

    tl.to(".responsiveNavItem", {
      y: -30,
      opacity: 0,
      scale: 0.96,
      duration: 0.25,
      ease: "power2.in",
      stagger: { each: 0.04, from: "end" },
    });

    tl.to(
      navLinks.current,
      {
        clipPath: "circle(66px at 90% -10%)",
        pointerEvents: "none",
        duration: 0.5,
        ease: "power3.inOut",
      },
      0.15
    );

    tl.to(
      firstLine.current,
      { y: 0, rotation: 0, duration: 0.3, ease: "power2.inOut" },
      0
    );
    tl.to(
      secondLine.current,
      { scaleX: 1, opacity: 1, duration: 0.3, ease: "power2.out" },
      0.1
    );
    tl.to(
      thirdLine.current,
      { y: 0, rotation: 0, duration: 0.3, ease: "power2.inOut" },
      0
    );
  }, []);

  const runMenuAnimation = useCallback(
    (nextOpen: boolean) => {
      if (!isMobile()) return;
      if (nextOpen) {
        animateOpen();
      } else {
        animateClose();
      }
    },
    [animateOpen, animateClose]
  );

  const toggle = useCallback(() => {
    setOpen((prev) => {
      runMenuAnimation(!prev);
      return !prev;
    });
  }, [runMenuAnimation]);

  const handleLinkClick = useCallback(() => {
    setOpen(false);
    runMenuAnimation(false);
  }, [runMenuAnimation]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    [toggle]
  );

  return (
    <div className="navbar-wrapper">
      <nav
        className={`${styles.nav} ${sticky ? styles.sticky : ""}`}
        ref={navbarRef}
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          className={styles.hamburger}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          type="button"
        >
          <div className={`${styles.line} f`} ref={firstLine} />
          <div className={`${styles.line} s`} ref={secondLine} />
          <div className={`${styles.line} t`} ref={thirdLine} />
        </button>

        <div className={styles.social_icons}>
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <ul className={styles.nav_links} ref={navLinks} id="nav-links">
          {MenuItems.map((item) => (
            <li key={item.url} className="responsiveNavItem">
              <Link
                to={item.url}
                activeClass={styles.active}
                spy
                smooth
                offset={-70}
                onClick={handleLinkClick}
                duration={500}
                className="cnav-link"
                href={`#${item.url}`}
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
