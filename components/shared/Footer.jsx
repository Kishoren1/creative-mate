import Link from "next/link";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Link href="/">
              <img src="/logo.svg" alt="Logo" className={styles.footerLogo} />
            </Link>
            <p>Learn more about our story and mission.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <p>&copy; {currentYear} Creative Mate. All rights reserved.</p>

          <span className={styles.footer_credit}>
            Designed and daveloped by Kishore.dev
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
