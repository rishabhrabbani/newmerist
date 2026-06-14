import Image from "next/image";
import styles from "../styles/team.module.css";

const members = [
  {
    name: "G. Kavitha (Ganesan Kavitha)",
    role: "Managing Trustee / President",
    description: "Leading MERIST with vision and dedication towards community empowerment and social welfare.",
    image: "/images/Owner/Kavitha.jpeg",
  },
  {
    name: "Chinnappan Arulanandam",
    role: "Treasurer",
    description: "Managing trust finances with transparency and ensuring every rupee reaches those in need.",
    image: "/images/Owner/Arul.jpeg",
  },
  {
    name: "Rathinam Jayakumar",
    role: "Trustee",
    description: "Driving rural development initiatives and community engagement programs across Cuddalore.",
    image: "/images/Owner/Jay.jpeg",
  },
];

export default function Team() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Our People</span>
        <h2>Leadership Team</h2>
        <p className={styles.subtitle}>
          Dedicated individuals working together to build a better tomorrow
        </p>
      </div>

      <div className={styles.grid}>
        {members.map((member, i) => (
          <div className={`${styles.card} ${i === 0 ? styles.featured : ""}`} key={i}>
            <div className={styles.avatar}>
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className={styles.avatarImg}
              />
            </div>
            {i === 0 && <span className={styles.badge}>★ Founder</span>}
            <h3>{member.name}</h3>
            <span className={styles.role}>{member.role}</span>
            <p>{member.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <h3>About MERIST Trust</h3>
          <p>
            Multipurpose Educational and Rural Integrated Social Trust (MERIST) was established in 2025
            with a mission to serve humanity through education, social welfare, and rural development.
            Based in Nellikuppam, Cuddalore, Tamil Nadu, we are committed to building better futures
            for underprivileged communities.
          </p>
          <div className={styles.values}>
            <span>🎯 Truth</span>
            <span>💪 Effort</span>
            <span>⭐ Prominence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
