import classes from "../../styles/Learn.module.scss";
import Title from "../commons/Title";
import Section from "../commons/Section";
import { data } from "../../data/learn";
import Button from "../commons/Button";
import LearnList from "../LearnList";
import Container from "../commons/Container";

export default function Learn() {
  return (
    <Section className={classes.learn}>
      <Container>
        <section className={classes.learn__body}>
          <Title text={data.title} />
          <LearnList list={data.list} />
          <Button text={data.btnText} />
        </section>
      </Container>
    </Section>
  );
}
