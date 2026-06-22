import styles from "../styles/impact.module.css";

const svgIcons = {
  lives: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  projects: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  transparency: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  partners: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
};

export default function Impact() {
  const items = [
    { number: "500+", label: "Lives Impacted", icon: "lives", color: "#ff6b6b" },
    { number: "15+", label: "Projects Funded", icon: "projects", color: "#ffa94d" },
    { number: "100%", label: "Transparency", icon: "transparency", color: "#51cf66" },
    { number: "5+", label: "Global Partners", icon: "partners", color: "#339af0" },
  ];

  return (
    <section className={styles.impact}>
      <div className={styles.header}>
        <span className={styles.badge}>Our Impact</span>
        <h2 className={styles.title}>Making a Real Difference</h2>
        <p className={styles.subtitle}>
          Every number tells a story of hope, change, and community transformation.
        </p>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.card} key={index} style={{ "--accent": item.color }}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>{svgIcons[item.icon]}</span>
            </div>
            <h3 className={styles.number}>{item.number}</h3>
            <p className={styles.label}>{item.label}</p>
            <div className={styles.glow}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
