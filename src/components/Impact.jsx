import styles from "../styles/impact.module.css";

export default function Impact() {
  const items = [
    { number: "500+", label: "Lives Impacted", icon: "❤️", color: "#ff6b6b" },
    { number: "15+", label: "Projects Funded", icon: "🤝", color: "#ffa94d" },
    { number: "100%", label: "Transparency", icon: "✓", color: "#51cf66" },
    { number: "5+", label: "Global Partners", icon: "🌐", color: "#339af0" },
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
              <span className={styles.icon}>{item.icon}</span>
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
