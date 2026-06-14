import { useState } from "react";
import styles from "../styles/donate.module.css";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeQTZFNeAShcJHA_hFAySJg-xsclWONyMlsdemBd_6RX8u0iQ/formResponse";

export default function DonateModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", address: "", amount: "", transactionId: "", message: "" });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("form");
  const [showQr, setShowQr] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile)) errs.mobile = "Enter valid 10-digit mobile";
    if (!form.address.trim()) errs.address = "Address is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter valid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const iframeName = "donate_iframe_" + Date.now();
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const hiddenForm = document.createElement("form");
    hiddenForm.method = "POST";
    hiddenForm.action = GOOGLE_FORM_ACTION;
    hiddenForm.target = iframeName;

    const entries = {
      "entry.1078772090": form.name,
      "entry.984364561": form.mobile,
      "entry.638515391": form.email,
      "entry.2017970761": form.address,
      "entry.1091898999": form.amount,
      "entry.343895958": form.transactionId,
      "entry.1270008550": form.message,
    };

    Object.entries(entries).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value || "";
      hiddenForm.appendChild(input);
    });

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();

    setTimeout(() => {
      document.body.removeChild(hiddenForm);
      document.body.removeChild(iframe);
    }, 3000);

    setStep("receipt");
  };

  const handleClose = () => {
    setStep("form");
    setShowQr(false);
    setErrors({});
    setForm({ name: "", mobile: "", email: "", address: "", amount: "", transactionId: "", message: "" });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={handleClose}>✕</button>

        {step === "form" && (
          <>
            <h2>Support MERIST Trust</h2>
            <p className={styles.desc}>Fill in your details to donate.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label>Mobile Number *</label>
                <div className={styles.phoneRow}>
                  <span className={styles.countryCode}>+91</span>
                  <input type="tel" value={form.mobile} onChange={(e) => { const val = e.target.value.replace(/\D/g, "").slice(0, 10); setForm({ ...form, mobile: val }); }} placeholder="Enter 10-digit number" maxLength={10} />
                </div>
                {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Enter email (optional)" />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <label>Address *</label>
                <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Enter your address" rows={2} />
                {errors.address && <span className={styles.error}>{errors.address}</span>}
              </div>

              {/* Payment Section */}
              <div className={styles.paymentSection}>
                <h4 className={styles.paymentTitle}>💳 Payment</h4>
                <button type="button" className={styles.payBtn} onClick={() => setShowQr(!showQr)}>
                  {showQr ? "Hide QR Scanner" : "Show QR Scanner to Pay"}
                </button>

                {showQr && (
                  <div className={styles.qrBox}>
                    <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" fill="#fff" stroke="#1a7a6d" strokeWidth="3" rx="12"/>
                      <rect x="20" y="20" width="50" height="50" fill="#1a7a6d"/>
                      <rect x="25" y="25" width="40" height="40" fill="#fff"/>
                      <rect x="32" y="32" width="26" height="26" fill="#1a7a6d"/>
                      <rect x="130" y="20" width="50" height="50" fill="#1a7a6d"/>
                      <rect x="135" y="25" width="40" height="40" fill="#fff"/>
                      <rect x="142" y="32" width="26" height="26" fill="#1a7a6d"/>
                      <rect x="20" y="130" width="50" height="50" fill="#1a7a6d"/>
                      <rect x="25" y="135" width="40" height="40" fill="#fff"/>
                      <rect x="32" y="142" width="26" height="26" fill="#1a7a6d"/>
                      <rect x="80" y="80" width="40" height="40" fill="#1a7a6d"/>
                      <rect x="85" y="85" width="30" height="30" fill="#fff"/>
                      <rect x="92" y="92" width="16" height="16" fill="#1a7a6d"/>
                      <rect x="80" y="20" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="95" y="35" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="110" y="45" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="130" y="90" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="150" y="100" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="160" y="130" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="140" y="150" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="80" y="140" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="100" y="160" width="10" height="10" fill="#1a7a6d"/>
                      <rect x="170" y="160" width="10" height="10" fill="#1a7a6d"/>
                    </svg>
                    <p className={styles.upiId}>UPI: merist@upi</p>
                    <p className={styles.qrNote}>Scan with any UPI app to pay</p>
                  </div>
                )}
              </div>

              {/* Donation Amount */}
              <div className={styles.field}>
                <label>Donation Amount (₹)</label>
                <input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="Enter paid amount" />
              </div>

              {/* Transaction ID */}
              <div className={styles.field}>
                <label>Transaction ID</label>
                <input type="text" value={form.transactionId} onChange={(e) => setForm({ ...form, transactionId: e.target.value })} placeholder="Enter UPI transaction ID (after payment)" />
              </div>

              <div className={styles.field}>
                <label>Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any message (optional)" rows={2} />
              </div>

              <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
          </>
        )}

        {step === "receipt" && (
          <div className={styles.receipt}>
            <span className={styles.receiptIcon}>✅</span>
            <h3>Thank You for Your Support!</h3>
            <div className={styles.receiptCard}>
              <div className={styles.receiptRow}><span>Name</span><strong>{form.name}</strong></div>
              <div className={styles.receiptRow}><span>Mobile</span><strong>{form.mobile}</strong></div>
              {form.email && <div className={styles.receiptRow}><span>Email</span><strong>{form.email}</strong></div>}
              <div className={styles.receiptRow}><span>Address</span><strong>{form.address}</strong></div>
              {form.amount && <div className={styles.receiptRow}><span>Amount</span><strong>₹{form.amount}</strong></div>}
              {form.transactionId && <div className={styles.receiptRow}><span>Transaction ID</span><strong>{form.transactionId}</strong></div>}
              {form.message && <div className={styles.receiptRow}><span>Message</span><strong>{form.message}</strong></div>}
              <div className={styles.receiptRow}><span>Date</span><strong>{new Date().toLocaleDateString("en-IN")}</strong></div>
            </div>
            <p className={styles.receiptNote}>Your details have been recorded. Thank you for supporting MERIST Trust.</p>
            <button onClick={handleClose} className={styles.submitBtn}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
