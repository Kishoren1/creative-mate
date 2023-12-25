import { getServerSession } from "next-auth";
import styles from "./profile.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.profile_header}>
          <h2>{session.user.name}</h2>
          <span>{session.user.email}</span>
        </div>
        <div className={styles.profile_options}>
          <div className={styles.option}>
            <h3>Password Update</h3>
            <p>Click here to update your password.</p>

            <Link href="/update-password">
              <button className={styles.update_button} type="button">
                Update Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
