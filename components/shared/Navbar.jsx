"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const userRole = session?.user?.role;
  const router = useRouter();

  const normalNavItems = [
    { text: "About Us", link: "/about-us" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Exhibitions", link: "/events" },
    { text: "Contact", link: "/contact" },
  ];

  const adminNavItems = [
    { text: "Dashboard", link: "/admin/dashboard" },
    { text: "Users", link: "/admin/users" },
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
