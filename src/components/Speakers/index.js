import classes from "../../styles/Speakers.module.scss";
import Container from "../commons/Container";
import Title from "../commons/Title";
import Section from "../commons/Section";
import SpeakerCard from "../SpeakerCard";
import { data } from "../../data/speakers";
import {v4 as uuid} from "uuid"

export default function Speakers() {
    return(
        <Section className={classes.speakers}>
        <Container>
          <section className={classes.speakers__body}>
            <Title text={data.title}/>
            <ul className={classes.speakers}>
                {data.list.map(speaker => <SpeakerCard
                position={speaker.position} name={speaker.name} text={speaker.text} image={speaker.image} key={uuid()}/>)}
            </ul>
          </section>
        </Container>
      </Section>
    )
};
