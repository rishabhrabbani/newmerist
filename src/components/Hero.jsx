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
              <span className={styles.btnIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span> Donate Now
            </button>
            <a href="/docs/annual-report.html" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              <span className={styles.btnIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg></span> Read Annual Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

