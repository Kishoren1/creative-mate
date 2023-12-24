"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.svg" alt="" width={110} />
          </Link>
        </div>

        <ul
          className={
            isNavOpen ? `${styles.navList} ${styles.open}` : styles.navList
          }
        >
          <li className={styles.navItem}>
            <Link href="/about-us" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/events" onClick={handleLinkClick}>
              Exhibitions
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>

          <li className={styles.navItem}>
            {session && (
              <>
                <Link href="/admin/dashboard">Dashboard</Link>
              </>
            )}
          </li>
        </ul>

        <ul className={styles.nav_socials}>
          <li className={styles.navSocial}>
            {!session && (
              <>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="bx bxl-facebook bx-sm"></i>
                </a>
              </>
            )}
          </li>
          <li className={styles.navSocial}>
            {!session && (
              <>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bx bxl-instagram-alt bx-sm"></i>
                </a>
              </>
            )}
          </li>

          <li className={styles.navSocial}>
            {session && (
              <>
                <span>{session.user.name}! </span>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </li>
        </ul>

        <div className={styles.nav_toggle} onClick={handleNavToggle}>
          <i className="bx bx-menu-alt-right bx-md"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
