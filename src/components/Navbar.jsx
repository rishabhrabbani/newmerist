import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

export default function Navbar({ onDonateClick, activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.navOpen : ""}`}>
      <div className={styles.logo} onClick={() => handleNavClick("home")} style={{ cursor: "pointer" }}>
        <Image src="/images/logo.jpeg" alt="MERIST Logo" width={50} height={50} className={styles.logoImg} />
        <span className={styles.logoText}>MERIST</span>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)} />}

      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <li className={activePage === "home" ? styles.active : ""} onClick={() => handleNavClick("home")}>Home</li>
        <li className={activePage === "about" ? styles.active : ""} onClick={() => handleNavClick("about")}>Organisation</li>
        <li className={activePage === "mission" ? styles.active : ""} onClick={() => handleNavClick("mission")}>Our Mission</li>
        <li className={activePage === "programs" ? styles.active : ""} onClick={() => handleNavClick("programs")}>Programs</li>
        <li className={activePage === "contact" ? styles.active : ""} onClick={() => handleNavClick("contact")}>Contact</li>
        
        {/* Mobile-only CTA */}
        <li className={styles.mobileCta}>
          <button className={styles.mobileBtn} onClick={() => { onDonateClick(); setIsMenuOpen(false); }}>Donate Now</button>
        </li>
      </ul>

      <button className={styles.btn} onClick={onDonateClick}>Donate Now</button>
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}

