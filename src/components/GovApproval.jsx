import styles from "../styles/govapproval.module.css";

export default function GovApproval() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.shield}>🛡️</div>
        <span className={styles.tag}>Verified & Trusted</span>
        <h2 className={styles.title}>Government Registered & Verified Trust</h2>
        <p className={styles.subtitle}>
          Officially registered under The Indian Trusts Act, 1882 — DARPAN verified by NITI Aayog
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>📋</div>
          <h3>Registration Details</h3>
          <div className={styles.details}>
            <div className={styles.row}>
              <span>Registration No</span>
              <strong>IV/29/25</strong>
            </div>
            <div className={styles.row}>
              <span>DARPAN ID</span>
              <strong>TN/2026/0970681</strong>
            </div>
            <div className={styles.row}>
              <span>Act Name</span>
              <strong>The Indian Trusts Act, 1882</strong>
            </div>
            <div className={styles.row}>
              <span>Type</span>
              <strong>Trust (NPO)</strong>
            </div>
            <div className={styles.row}>
              <span>Date of Registration</span>
              <strong>24-12-2025</strong>
            </div>
            <div className={styles.row}>
              <span>State</span>
              <strong>Tamil Nadu, Cuddalore</strong>
            </div>
            <div className={styles.viewDoc}>
              <a href="/images/Multi.jpg" target="_blank" rel="noopener noreferrer">
                📄 View Approval Document
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>👥</div>
          <h3>Office Bearers</h3>
          <div className={styles.details}>
            <div className={styles.row}>
              <span>President</span>
              <strong>Ganesan Kavitha</strong>
            </div>
            <div className={styles.row}>
              <span>Treasurer</span>
              <strong>Chinnappan Arulanandam</strong>
            </div>
            <div className={styles.row}>
              <span>Trustee</span>
              <strong>Rathinam Jayakumar</strong>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🎯</div>
          <h3>Working Sectors</h3>
          <div className={styles.tags}>
            <span>🧒 Children</span>
            <span>🏥 Health & Family Welfare</span>
            <span>📚 Education & Literacy</span>
            <span>💻 Information & Communication Technology</span>
            <span>🌾 Rural Development</span>
          </div>
        </div>
      </div>

      <div className={styles.badges}>
        <div className={styles.badgeItem}>
          <span className={styles.badgeIcon}>✅</span>
          <div>
            <strong>NITI Aayog</strong>
            <p>DARPAN Verified</p>
          </div>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.badgeIcon}>✅</span>
          <div>
            <strong>Sub-Registrar</strong>
            <p>Officially Approved</p>
          </div>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.badgeIcon}>✅</span>
          <div>
            <strong>ESTD 2025</strong>
            <p>Registered Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
}
