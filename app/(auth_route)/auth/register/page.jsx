"use client";

import { useState } from "react";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const { name, email, password } = userInfo;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    setBusy(true);
    e.preventDefault();
    const res = await fetch("/api/auth/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    console.log(res);
    setBusy(false);

    if (res?.error) return setError(res.error);

    router.replace("/auth/login");
  };

  return (
    <div className={styles.register}>
      <div className={styles.register__wrap}>
        <form className={styles.register_form} onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Enter your name.."
                value={name}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className={styles.form_field}>
            <label>
              Emai:
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

          <button
            type="submit"
            className={styles.btn}
            disabled={busy}
            style={{ opacity: busy ? 0.5 : 1 }}
          >
            Register
          </button>

          <span
            style={{
              color: "red",
              textAlign: "center",
              marginTop: "0.3rem",
              fontSize: "14px",
            }}
          >
            {error && error}
          </span>
        </form>
      </div>
    </div>
  );
}
