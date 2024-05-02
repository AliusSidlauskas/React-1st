import { useState } from "react";
import styles from "./ArticleCard.module.css";

export const ArticleCard = ({ title, text, imgUrl, suggestion }) => {
  const [isShowSuggestion, setShowSuggestion] = useState(false);
  console.log(title)

  return (
    <div className={styles.main}>
      <h3>{title}</h3> 
      <p>{text}</p>
      <img src={imgUrl}/>
      <button onClick={() => setShowSuggestion(!isShowSuggestion)}>
        {isShowSuggestion ? "Hide" : "Show"}
      </button>
      {isShowSuggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default ArticleCard;