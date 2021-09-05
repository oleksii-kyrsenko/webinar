import classes from "../../styles/SpeakerCard.module.scss";
import Paragraph from "../commons/Paragraph";


export default function SpeakerCard({position, name, text, image}) {
    return(
        <li className={classes.speaker}>
            
            <div className={classes.speaker__img}>
                <img src={image} alt={position + name} width={"445px"} height={"455px"}/>
            </div>
            <div className={classes.speaker__content}>
            <div className={classes["speaker__content-body"]}>
                <p className={classes.speaker__position}>{position}</p>
                <h3 className={classes.speaker__name}>{name}</h3>
                <div className={classes.speaker__text}>
                    <Paragraph data={text}/>
                </div>
                </div>
            </div>
        </li>
    )
};
