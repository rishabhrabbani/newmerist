import styles from "../styles/features.module.css";

const features = [
  { icon: "📖", title: "Education", desc: "Empowering minds through quality learning for every child" },
  { icon: "🤝", title: "Social Welfare", desc: "Uplifting communities with care and sustainable support" },
  { icon: "🌱", title: "Rural Development", desc: "Transforming villages with modern resources and opportunities" },
  { icon: "🏔️", title: "Empowering Communities", desc: "Building self-reliant and resilient local communities" },
  { icon: "💚", title: "Care & Compassion", desc: "Serving humanity with dedication and heartfelt commitment" },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <span className={styles.badge}>Our Mission</span>
        <h2 className={styles.title}>What We Stand For</h2>
        <p className={styles.subtitle}>
          Driven by purpose, guided by compassion — creating lasting change across communities.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>{f.icon}</span>
            </div>
            <h4>{f.title}</h4>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
