import React, { useState } from "react";
import style from "./Register.module.css";
import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import Swal from "sweetalert2";
import { useUnit } from "effector-react";
import { $user, setUser } from "../models/user";
import { registerRequest } from "../hooks/auth";

export function Register() {
  const user = useUnit($user);
  const [form, setForm] = useState({});

  const setInputValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.re_password) return null;

    if (form?.username?.length && form?.password?.length) {
      const res = await registerRequest(form);

      if (res) {
        setUser(res);
      }
    }
  };

  return (
    <div className={style.container}>
      {user.username && <Navigate to="/Cabinet" replace={true} />}
      <div className={style.ssp}>
        <div className={style.pps}>
          <form>
            <div className={style.wrapper}>
              <h1>Register</h1>
              <div className={style.inputbox}>
                <input
                  name="username"
                  type="text"
                  onChange={setInputValue}
                  placeholder="Username"
                  required
                />

                <FaUser className={style.icon} />
              </div>
              <div className={style.inputbox}>
                <input
                  name="Email"
                  onChange={setInputValue}
                  type="text"
                  placeholder="Email"
                  required
                />
                <MdEmail className={style.icon} />
              </div>
              <div className={style.inputbox}>
                <input
                  name="password"
                  onChange={setInputValue}
                  type="Password"
                  placeholder="Password"
                  required
                />
                <FaLock className={style.icon} />
              </div>
              <div className={style.inputbox}>
                <input
                  name="re_password"
                  onChange={setInputValue}
                  type="Password"
                  placeholder="Repeat the password"
                  required
                />

                <FaLock className={style.icon} />
              </div>
              <div className={style.rememberforgot}></div>
              <button
                className={style.but}
                disabled={Object.values(form).filter(Boolean).length !== 4}
                onClick={handleSubmit}
              >
                Create an account
              </button>

              <Link className={style.exit} to="/Login">
                Exit
              </Link>
              <div className={style.registerlink}></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
