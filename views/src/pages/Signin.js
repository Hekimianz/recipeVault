import styles from "./css/Signin.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitFunction = async () => {
    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.auth) {
          props.setLoginStatus(true);
          localStorage.setItem("token", data.token);
          console.log(data);
        } else {
          props.setLoginStatus(false);
        }
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function userAuthenticated() {
    const response = await fetch("http://localhost:4000/user/profile", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(await response.json());
  }

  return (
    <div className={styles.signinMainCont}>
      <h2 className={styles.signinTitle}>Sign In</h2>
      <div className={styles.signinInputCont}>
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
      <div className={styles.signinInputCont}>
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
      <button onClick={submitFunction}>Log In</button>
      <span>
        Dont have an account? <Link to="/signup">Sign up here!</Link>
      </span>
      {props.loginStatus ? (
        <span onClick={userAuthenticated}>Logged in</span>
      ) : null}
    </div>
  );
}

export default Signin;
