import styles from "./Footer.module.css";
import copyLogo from "../../assets/1024px-Copyright.svg.png";
import { useState } from "react";

const Footer = () => {
  const [copyrightText, setCopyrightText] = useState(
    "2024 All rights reserved"
  );

  const [isDisplayedCopyrightText, setIsDisplayedCopyrightText] =
    useState(false);
  const displayCopyrightText = () => {
    console.log(copyrightText);
  };

  const handleClick = () => {
    if (isDisplayedCopyrightText) {
      setIsDisplayedCopyrightText(false);
    } else {
      setIsDisplayedCopyrightText(true);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.copyright}>
        <img src={copyLogo.src} className={styles.copyLogo} />

        {isDisplayedCopyrightText && (
          <h5 onClick={displayCopyrightText} className={styles.copyrightText}>
            {copyrightText}
          </h5>
        )}

        <button onClick={handleClick}>Try me</button>
      </div>
    </div>
  );
};

export default Footer;
