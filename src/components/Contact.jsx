import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 7L2 7"/>
            </svg>
          </span>
          <h4>Email</h4>
          <p>meristrust25@gmail.com</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </span>
          <h4>Phone</h4>
          <p>+91 9566993768</p>
          <p>+91 9789619708</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <h4>Address</h4>
          <p>No: 77/27, Arokiya Samy Street,</p>
          <p>Nellikuppam, Cuddalore Dt,</p>
          <p>Tamil Nadu - 607 105, India.</p>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15614.2!2d79.6833!3d11.7711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5499e05e48a5e3%3A0x3c2e5e6a7e3f1b0!2sNellikuppam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "14px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MERIST Trust Location"
        />
      </div>
    </section>
  );
}
