import  {  useEffect } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Learn from "./components/Learn";
import Need from "./components/Need";
import Widget from "./components/Widget";
import smoothscroll from "smoothscroll-polyfill";
import classes from "./styles/App.module.scss";


function App() {

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <section className={classes.wrapper}>
      <Header />
      <Hero/>
      <Need/>
      <Learn/>
      <Banner/>
      <Widget/>
      <Footer/>
    </section>
  );
}

export default App;
