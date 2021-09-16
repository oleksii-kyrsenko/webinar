import useScript from "../../hooks/useScript";
import classes from "../../styles/Widget.module.scss";
import Container from "../commons/Container";


export default function Widget({children}) {
  useScript("https://customer.smartsender.eu/js/client/lp.min.js?v2.0.0")
   
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