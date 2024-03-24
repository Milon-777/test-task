import { useState } from "react";
import styles from "./Cards.module.scss";
import { cardsData } from "../../initialData/initialData";
import { TriangleClasses } from "../../types/types";

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  const triangleClasses: TriangleClasses = {
    up: styles.card__triangleUp,
    down: styles.card__triangleDown,
  };

  const handleSelectCard = (index: number) => {
    setSelectedCard(index);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedCard(index);
    }
  };

  return (
    <div className={styles.card__wrapper}>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            selectedCard === index ? styles.selected : ""
          }`}
          onClick={() => handleSelectCard(index)}
          tabIndex={0}
          onKeyDown={(event) => handleKeyPress(event, index)}>
          <span className={styles.card__budgetName}>
            {card.name}
            <span
              className={`${triangleClasses[card.triangle]} ${
                selectedCard === index ? styles.selected : ""
              }`}></span>
          </span>
          <span className={styles.card__budget}>$85,125.00</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
