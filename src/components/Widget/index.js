import useScript from "../../hooks/useScript";
import classes from "../../styles/Widget.module.scss";
import Container from "../commons/Container";


export default function Widget({children, src}) {
  useScript(src)
   
  return (
    <section className={classes.widget} id="widget">
      <Container>
        <section className={classes.widget__body}>
        {children}
        </section>
      </Container>
    </section>
  );
}