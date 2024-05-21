import React, { useLayoutEffect, useState } from "react";
import style from "./Login.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate, redirect } from "react-router-dom";
import { loginRequest } from "../hooks/auth";
import { useUnit } from "effector-react";
import { $user, setUser } from "../models/user";

export function Login() {
  const user = useUnit($user);
  const [form, setForm] = useState({});

  const setInputValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form?.username?.length && form?.password?.length) {
      const res = await loginRequest(form);

      if (res) {
        setUser(res);
      }
    }
  };

  useLayoutEffect(() => {}, []);

  return (
    <div className={style.container}>
      {user.username && <Navigate to="/Cabinet" replace={true} />}
      <div className={style.ssp}>
        <div className={style.pps}>
          <div className={style.wrapper}>
            <h1>Login</h1>
            <form>
              <div className={style.inputbox}>
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  required
                  onChange={setInputValue}
                />
                <FaUser className={style.icon} />
              </div>
              <div className={style.inputbox}>
                <input
                  name="password"
                  type="Password"
                  placeholder="Password"
                  required
                  onChange={setInputValue}
                />
                <FaLock className={style.icon} />
              </div>
              <div className={style.rememberforgot}>
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button className={style.button} onClick={handleSubmit}>
                <a className={style.loginB}>Login</a>
              </button>
            </form>
            <div className={style.registerlink}>
              <a>Dont have an account?</a>
              <Link className={style.registeracc} to="/Register">
                <a className={style.colorreg}>Register</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
