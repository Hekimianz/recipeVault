import styles from "./css/Signup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const validatePass = () => {
    if (password === passwordConf) {
      return true;
    } else return false;
  };

  const submitFunction = async () => {
    try {
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Registered successfully");
        setName("");
        setUsername("");
        setPassword("");
        setPasswordConf("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signupMainCont}>
      <h2 className={styles.signupTitle}>Sign Up</h2>
      <div className={styles.signupInputCont}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className={styles.signupInputCont}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className={styles.signupInputCont}>
        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          id="pass"
          name="pass"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className={styles.signupInputCont}>
        <label htmlFor="passConf">Confirm Password: </label>
        <input
          type="password"
          id="passConf"
          name="passConf"
          value={passwordConf}
          onChange={(e) => {
            setPasswordConf(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          if (validatePass()) {
            submitFunction();
          }
        }}
      >
        Create Account
      </button>
      <span>
        Already have an account? <Link to="/signin">Sign in here!</Link>
      </span>
    </div>
  );
}

export default Signup;
