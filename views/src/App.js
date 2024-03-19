import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./css/App.module.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className={styles.mainCont}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
