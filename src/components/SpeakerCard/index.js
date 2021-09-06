import classes from "../../styles/SpeakerCard.module.scss";
import Paragraph from "../commons/Paragraph";
import { v4 as uuid } from "uuid";

export default function SpeakerCard({ position, name, text, image, list }) {
  return (
    <li className={classes.speaker}>
      <div className={classes.speaker__img}>
        <img
          src={image}
          alt={position + name}
          width={"445px"}
          height={"455px"}
        />
      </div>
      <div className={classes.speaker__content}>
        <div className={classes["speaker__content-body"]}>
          <p className={classes.speaker__position}>{position}</p>
          <h3 className={classes.speaker__name}>{name}</h3>
          <div className={classes.speaker__text}>
            <Paragraph data={text} />
          </div>
          {list && (
            <ul className={classes.speaker__list}>
              {list.map((item) => (
                <li className={classes.speaker__item} key={uuid()}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
