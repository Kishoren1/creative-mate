"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./AdminPage.module.css";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/admin/dashboard");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className={styles.admin_welcome}>
      <div className={styles.adminPageContainer}>
        <h2>Welcome to the Admin Page</h2>
        <p>You will be redirected to the Dashboard in a moment...</p>
      </div>
    </div>
  );
}
