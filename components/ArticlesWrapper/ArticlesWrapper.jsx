import { useState } from "react";
import styles from "./ArticlesWrapper.module.css";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export const ArticlesWrapper = () => {
  const [cards, setCards] = useState([
    {
      title: "Pirmadienis",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_PIRMADIENIS-Kartais-tu-ju-neimanoma-atlaikyti.jpg",
    },

    {
      title: "Antradienis",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_ANTRADIENIS-geriau-jau-atsikelciau-penktadieni-arba-niekada_155518284196.jpg ",
    },

    {
      title: "Trečiadienis",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_siandien-treciadienis-ir-tai-reiskia...-Kad-tu-zinosi-ka-veikia-89-jaunimo-nuo-2200-iki-2300-valandos.jpg",
    },

    {
      title: "Ketvirtadienis",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      imgUrl:
        "https://m.demotyvacijos.lt/media/demotivators/demotyvacija.lt_Ketvirtadienis-penktadienigaudyk-mane_140013969439.jpg",
    },
  ]);

  return (
    <div className={styles.main}>
      <ArticleCard
        title={cards[0].title}
        text={cards[0].text}
        imgUrl={cards[0].imgUrl}
      />

      <ArticleCard
        title={cards[1].title}
        text={cards[1].text}
        imgUrl={cards[1].imgUrl}
      />

      <ArticleCard
        title={cards[2].title}
        text={cards[2].text}
        imgUrl={cards[2].imgUrl}
      />

      <ArticleCard
        title={cards[3].title}
        text={cards[3].text}
        imgUrl={cards[3].imgUrl}
      />
    </div>
  );
};

export default ArticlesWrapper;
