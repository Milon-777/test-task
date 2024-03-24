import styles from "./Profile.module.scss";
import profileImg from "../../assets/profileImg.svg";
import settingsIcon from "../../assets/searchIcon.svg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        src={profileImg}
        alt="Profile image"
        className={styles.profile__userImg}
      />

      <span className={styles.profile__greeting}>
        Welcome back,
        <br />
        <span className={styles.profile__username}>Drax</span>
      </span>

      <button className={styles.profile__settings}>
        <img
          src={settingsIcon}
          alt="Show settings"
          className={styles.profile__settingsIcon}
        />
      </button>
    </div>
  );
};

export default Profile;
