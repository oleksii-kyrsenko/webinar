import useScript from "../../hooks/useScript";
import classes from "../../styles/Widget.module.scss";
import Container from "../commons/Container";


export default function Widget() {
  useScript("https://customer.smartsender.eu/js/client/lp.min.js?v2.0.0")
   
  return (
    <section className={classes.widget} id="widget">
      <Container>
        <section className={classes.widget__body}>
        <div id="35H09lyN" className="ss-landing" data-target="35H09lyN" data-domain="engenious"></div>
        </section>
      </Container>
    </section>
  );
}