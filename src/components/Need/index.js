import classes from "../../styles/Need.module.scss";
import Container from "../commons/Container";
import Title from "../commons/Title";
import Section from "../commons/Section";
import { data } from "../../data/need";
import Button from "../commons/Button";
import CardsList from "../CardsList";

export default function Need() {
  return (
    <Section className={classes.need}>
      <Container>
        <section className={classes.need__body}>
          <Title text={data.title}/>
          <CardsList data={data.cards}/>
          <Button text={data.btnText} />
        </section>
      </Container>
    </Section>
  );
}
