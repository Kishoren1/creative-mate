"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const { email, password } = userInfo;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) return setError(res.error);
    router.replace("/");
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__wrap}>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          <br />
          <div className={styles.form_field}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your email address.."
                value={email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.form_field}>
            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="Enter your password!"
                value={password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button className={styles.btn} type="submit">
            Sign in with Credentials
          </button>

          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginTop: "0.3rem",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
