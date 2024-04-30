import styles from "./ArticleCard.module.css";

export const ArticleCard = ({title, text, imgUrl}) => {
  return (
    <div className={styles.main}>
       <h3>{title}</h3> 
       <p>{text}</p>
       <img src={imgUrl}/>
    </div>
  )
}

export default ArticleCard

