import styles from "./ArticlesWrapper.module.css";
import {
  ArticleCard,
  ArticleCard2,
  ArticleCard3,
  ArticleCard4,
} from "../ArticleCard/ArticleCard";

export const ArticlesWrapper = () => {
  return (
    <div className={styles.main}>
      <ArticleCard />
      <ArticleCard2 />
      <ArticleCard3 />
      <ArticleCard4 />
    </div>
  );
};

export default ArticlesWrapper;
