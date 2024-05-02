import { useState } from "react";
import styles from "./Header.module.css";
import burgerMenu from "../../assets/burger-menu.svg";

const Header = () => {
  const [logo, setLogo] = useState("Bailard Foundation");
  const [isShowMobMenu, setShowMobMenu] = useState(false);

  const onMobileBtnHit = () => {
    setShowMobMenu(!isShowMobMenu);
  };

  return (
    <header className={styles.main}>
      <div className={styles.topic}>
        <h3 className={styles.logo}>{logo}</h3>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Read Me</a>
            </li>
          </ul>
        </nav>
        </div>


        <button onClick={onMobileBtnHit} className={styles.mobileBtn}>
          <img src={burgerMenu.src} />
        </button>
        {isShowMobMenu && (
          <div className={styles.mobileMenu}>
            <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Read Me</a>
            </li>
          </ul>
        </nav>
      </div>
        )}
    </header>
  )
};

export default Header;
