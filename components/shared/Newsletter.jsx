import styles from "./styles/Newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterSubtitle}>
          Stay updated with our latest news, events, and promotions.
        </p>
      </div>
      <form className={styles.newsletterForm}>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className={styles.formInput}
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
