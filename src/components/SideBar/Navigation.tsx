import { useState } from "react";
import { linksData } from "../../initialData/initialData";
import burgerIcon from "../../assets/burgerIcon.svg";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__links}>
        {linksData.map(({ icon, name, notificationCount }, index) => {
          return (
            <li className={styles.navigation__link} key={index}>
              <button
                className={`${styles.navigation__linkButton} ${
                  activeButton === index
                    ? styles.navigation__linkButton_active
                    : ""
                }`}
                onClick={() => handleButtonClick(index)}>
                <div className={styles.navigation__linkType}>
                  <img
                    src={icon}
                    alt={`${name} icon`}
                    className={styles.navigation__linkIcon}
                  />
                  <span className={styles.navigation__linkName}>{name}</span>
                </div>

                {index < 7 ? (
                  <div className={styles.navigation__notification}>
                    {notificationCount > 0 && (
                      <span className={styles.navigation__notificationCount}>
                        {notificationCount}
                      </span>
                    )}

                    <img
                      src={burgerIcon}
                      alt="Expand list"
                      className={styles.navigation__burgerIcon}
                    />
                  </div>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
