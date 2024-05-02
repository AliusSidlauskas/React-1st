import { useState } from "react";
import styles from "./ArticlesWrapper.module.css";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export const ArticlesWrapper = () => {
  const [cards, setCards] = useState([
    {
      title: "Monday",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_PIRMADIENIS-Kartais-tu-ju-neimanoma-atlaikyti.jpg",
      suggestion: "Get some coffee",
    },

    {
      title: "Tuesday",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_ANTRADIENIS-geriau-jau-atsikelciau-penktadieni-arba-niekada_155518284196.jpg ",
      suggestion: "Forget monday",
    },

    {
      title: "Wednesday",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_siandien-treciadienis-ir-tai-reiskia...-Kad-tu-zinosi-ka-veikia-89-jaunimo-nuo-2200-iki-2300-valandos.jpg",
      suggestion: "You are in the middle",
    },

    {
      title: "Thursday",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_Ketvirtadienis-penktadienigaudyk-mane_140013969439.jpg",
      suggestion: "Tomorrow is friday",
    },
  ]);

  
  return (
    <div className={styles.main}>
      {cards.map((card) => (
        <ArticleCard
          title={cards.title}
          text={card.text}
          imgUrl={card.imgUrl}
          suggestion={card.suggestion}
          />
        ))}
    </div>
  );
};


export default ArticlesWrapper;
