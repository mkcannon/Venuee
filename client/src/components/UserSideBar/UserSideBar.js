import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/images/clipart1129793.png";
import { UserSidebarData } from "./UserSidebarData";
import { UserUtilitiesData } from "./UserUtilitiesData";

function UserSidebar() {
  const [selectedTagName, setSelectedTagName] = useState(0);
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.profileHeader}>
        <img src={logo} alt={"no img avail"} className={styles.profileImg} />
        <div className={styles.profileName}>Booger</div>
      </div>
      <div>
        <ul className={styles.sidebarList}>
          {UserSidebarData.map((value, key) => {
            return (
              <li
                key={key}
                className={styles.row}
                tagName={key}
                id={window.location.pathname === value.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = value.link;
                  setSelectedTagName(key);
                  document
                    .getElementsByTagName(selectedTagName)
                    .addClassName(styles.active);
                }}
              >
                <div className={styles.icon}>{value.icon}</div>
                <div className={styles.title}>{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className={styles.utilSidebarList}>
          {UserUtilitiesData.map((value, key) => {
            return (
              <li
                key={key}
                className={styles.utilRow}
                id={window.location.pathname === value.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div className={styles.utilIcon}>{value.icon}</div>
                <div className={styles.utilTitle}>{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserSidebar;
