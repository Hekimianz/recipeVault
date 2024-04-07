import styles from "./css/Profile.module.css";
import { useEffect } from "react";
function Profile() {
  const fetchProfile = async () => {
    try {
      const data = await fetch("http://localhost:4000/user/profile");
      const dataJson = await data.json();
      console.log(dataJson);
    } catch (err) {
      console.error(err);
    }
  };
  fetchProfile();

  return <>profile</>;
}

export default Profile;
