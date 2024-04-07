import { useNavigate, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./css/TopNav.module.css";
import logo from "../assets/logo.png";
function TopNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.topNavMainCont}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <span
        className={
          "material-symbols-outlined " +
          (mobileMenu ? styles.mobileMenuIconOpen : styles.mobileMenuIconClosed)
        }
        onClick={() => setMobileMenu((prev) => !prev)}
      >
        menu
      </span>
      <div className={mobileMenu ? styles.mobileMenu : styles.mobileMenuHidden}>
        {mobileMenu ? (
          <ul className={styles.mobileMenuList}>
            <li className={styles.mobileMenuItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link to="/signin">Sign In</Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link to="/">About</Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link to="/">Help</Link>
            </li>
          </ul>
        ) : null}
      </div>
      <div className={styles.desktopMenu}>
        <ul className={styles.desktopMenuList}>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""
              }
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""
              }
            >
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
