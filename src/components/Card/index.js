import classes from "../../styles/Card.module.scss";
import Paragraph from "../commons/Paragraph";

export default function Card({ image, title, text }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={image} alt={title} />
      </div>
      <h3 className={classes.card__title}>
        {title}
      </h3>
      <div className={classes.card__text}>
        <Paragraph data={text}/>
      </div>
    </div>
  );
}
