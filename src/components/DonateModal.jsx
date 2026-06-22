import { useState } from "react";
import styles from "../styles/donate.module.css";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeQTZFNeAShcJHA_hFAySJg-xsclWONyMlsdemBd_6RX8u0iQ/formResponse";

export default function DonateModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", address: "", amount: "", transactionId: "", message: "" });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("form");
  const [payMethod, setPayMethod] = useState("");

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
    setPayMethod("");
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
                <h4 className={styles.paymentTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline",verticalAlign:"middle",marginRight:"6px"}}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  Payment
                </h4>
                <div className={styles.payOptions}>
                  <button type="button" className={`${styles.payBtn} ${payMethod === "account" ? styles.payBtnActive : ""}`} onClick={() => setPayMethod(payMethod === "account" ? "" : "account")}>
                    <img src="/images/logo.jpeg" alt="" width="18" height="18" style={{borderRadius:"4px",verticalAlign:"middle",marginRight:"6px"}} /> Pay using Account Number
                  </button>
                  <button type="button" className={`${styles.payBtn} ${payMethod === "scanner" ? styles.payBtnActive : ""}`} onClick={() => setPayMethod(payMethod === "scanner" ? "" : "scanner")}>
                    <img src="/images/logo.jpeg" alt="" width="18" height="18" style={{borderRadius:"4px",verticalAlign:"middle",marginRight:"6px"}} /> Pay using Scanner
                  </button>
                </div>

                {payMethod === "account" && (
                  <div className={styles.qrBox}>
                    <p><strong>Account Number:</strong> 8329906242</p>
                    <p><strong>IFSC:</strong> IDIB000N018</p>
                    <p className={styles.qrNote}>Transfer to the above account and enter transaction ID below</p>
                  </div>
                )}

                {payMethod === "scanner" && (
                  <div className={styles.qrBox}>
                    <img src="/images/Scanner.png" alt="UPI Scanner" style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "12px" }} />
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
            <span className={styles.receiptIcon}><img src="/images/logo.jpeg" alt="MERIST" width="40" height="40" style={{borderRadius:"8px"}} /></span>
            <h3>Thank You for Your Support!</h3>
            <div className={styles.receiptCard} id="donate-receipt">
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
            {form.amount && form.transactionId && (
              <button onClick={() => {
                const printContent = document.getElementById("donate-receipt").innerHTML;
                const win = window.open("", "_blank");
                win.document.write(`<html><head><title>Donation Receipt - MERIST Trust</title><style>body{font-family:sans-serif;padding:40px;max-width:500px;margin:auto}h2{color:#1a7a6d;text-align:center}div{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #eee}span{color:#666}strong{color:#222}</style></head><body><h2>MERIST Trust - Donation Receipt</h2>${printContent}</body></html>`);
                win.document.close();
                win.print();
              }} className={styles.printBtn}>Print Receipt</button>
            )}
            <button onClick={handleClose} className={styles.submitBtn}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
