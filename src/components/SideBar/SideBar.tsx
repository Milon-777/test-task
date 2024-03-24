import Navigation from "./Navigation";
import Profile from "./Profile";
import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <div className={styles.sidebar__container}>
      <Profile />
      <Navigation />
    </div>
  );
}
