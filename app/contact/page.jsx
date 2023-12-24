import React from "react";
import styles from "./contact.module.css";
import Newsletter from "@/components/shared/Newsletter";

const Contact = () => {
  return (
    <>
      <section className={styles.contact_section}>
        <h3>Feel free to reach us at..</h3>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h4>Address:</h4>
              <p>123 Art Street, Creativity City</p>
            </div>

            <div className={styles.infoItem}>
              <h4>Email:</h4>
              <p>info@creativemate.com</p>
            </div>

            <div className={styles.infoItem}>
              <h4>Phone:</h4>
              <p>+123 456 7890</p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                placeholder="Your Name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="Your Email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Type your message here..."
                rows="4"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Contact;
