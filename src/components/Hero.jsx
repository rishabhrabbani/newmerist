import styles from "../styles/hero.module.css";

export default function Hero({ onDonateClick }) {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Welcome to MERIST Trust</span>
          <h1 className={styles.title}>
            Empowering Communities,<br />
            Restoring Hope.
          </h1>
          <p className={styles.subtitle}>
            Founded on the pillars of <strong>Truth, Effort, and Prominence</strong>. 
            We are dedicated to giving hope, education, and sustainable development where it's needed most.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary} onClick={onDonateClick}>
              <span className={styles.btnIcon}>❤️</span> Donate Now
            </button>
            <a href="/docs/annual-report.html" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              <span className={styles.btnIcon}>📄</span> Read Annual Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

