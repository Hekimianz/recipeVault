import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 720) {
        setScreenSize("small");
      } else if (width >= 720 && width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className={styles.mainCont}>
        <TopNav screenSize={screenSize} />
        <Routes>
          <Route path="/" element={<Home screenSize={screenSize} />} />
          <Route
            path="/signin"
            element={
              <Signin
                setLoginStatus={setLoginStatus}
                loginStatus={loginStatus}
                screenSize={screenSize}
              />
            }
          />
          <Route path="/signup" element={<Signup screenSize={screenSize} />} />
          <Route
            path="/profile"
            element={<Profile screenSize={screenSize} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
