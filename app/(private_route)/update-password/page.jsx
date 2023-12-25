"use client";

import styles from "./updatePassword.module.css";

export default function UpdatePassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.update_password}>
      <div className={styles.container}>
        <h2>Password Update</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" required />

          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" required />

          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" required />

          <button type="submit" className={styles.update_button}>
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
