"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const userRole = session?.user?.role;
  const isAdmin = session && session.user.role === "admin";
  const router = useRouter();

  const normalNavItems = [
    { text: "About Us", link: "/about-us" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Exhibitions", link: "/events" },
    { text: "Contact", link: "/contact" },
  ];

  const adminNavItems = [
    { text: "About Us", link: "/about-us" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Exhibitions", link: "/events" },
    { text: "Dashboard", link: "/admin/dashboard" },
  ];

  const getNavItems = () => {
    if (userRole === "admin") return adminNavItems;
    return normalNavItems;
  };

  const navItems = getNavItems();

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
          {navItems.map((item) => (
            <li key={item.link} className={styles.navItem}>
              <Link href={item.link} onClick={handleLinkClick}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.nav_socials}>
          <li className={styles.navSocial}>
            {!isAdmin && (
              <>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="bx bxl-facebook bx-sm"></i>
                </a>
              </>
            )}
          </li>
          <li className={styles.navSocial}>
            {!isAdmin && (
              <>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bx bxl-instagram-alt bx-sm"></i>
                </a>
              </>
            )}
          </li>

          <li className={styles.nav_profile}>
            {session && session.user.role === "admin" && (
              <>
                <span>{session.user.name}</span>
                <i className="bx bx-user-circle bx-sm"></i>
                <div className={styles.dropdownContent}>
                  <li className={styles.dropdownItem}>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <button
                      onClick={handleLogout}
                      className={styles.btn_logout}
                    >
                      Logout
                    </button>
                  </li>
                </div>
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
