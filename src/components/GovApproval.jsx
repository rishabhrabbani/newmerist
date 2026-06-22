import styles from "../styles/govapproval.module.css";

export default function GovApproval() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.shield}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <span className={styles.tag}>Verified & Trusted</span>
        <h2 className={styles.title}>Government Registered & Verified Trust</h2>
        <p className={styles.subtitle}>
          Officially registered under The Indian Trusts Act, 1882 — DARPAN verified by NITI Aayog
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                View Approval Document
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
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
          <div className={styles.cardIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3>Working Sectors</h3>
          <div className={styles.tags}>
            <span>Children</span>
            <span>Health & Family Welfare</span>
            <span>Education & Literacy</span>
            <span>Information & Communication Technology</span>
            <span>Rural Development</span>
          </div>
        </div>
      </div>

      <div className={styles.badges}>
        <div className={styles.badgeItem}>
          <span className={styles.badgeIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <div>
            <strong>NITI Aayog</strong>
            <p>DARPAN Verified</p>
          </div>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.badgeIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <div>
            <strong>Sub-Registrar</strong>
            <p>Officially Approved</p>
          </div>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.badgeIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a7a6d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <div>
            <strong>ESTD 2025</strong>
            <p>Registered Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
}
