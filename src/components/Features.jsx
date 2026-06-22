import styles from "../styles/features.module.css";

const icons = {
  education: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  welfare: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  rural: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0020 0h-3"/><path d="M8 5.2C9.2 3.8 10.5 3 12 3s2.8.8 4 2.2"/><path d="M7 10.5C8.7 8.5 10.2 7.5 12 7.5s3.3 1 5 3"/></svg>,
  community: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  care: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
};

const features = [
  { icon: "education", title: "Education", desc: "Empowering minds through quality learning for every child" },
  { icon: "welfare", title: "Social Welfare", desc: "Uplifting communities with care and sustainable support" },
  { icon: "rural", title: "Rural Development", desc: "Transforming villages with modern resources and opportunities" },
  { icon: "community", title: "Empowering Communities", desc: "Building self-reliant and resilient local communities" },
  { icon: "care", title: "Care & Compassion", desc: "Serving humanity with dedication and heartfelt commitment" },
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
              <span className={styles.icon}>{icons[f.icon]}</span>
            </div>
            <h4>{f.title}</h4>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
