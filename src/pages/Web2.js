import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import classes from "../styles/App.module.scss";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Learn from "../components/Learn";
import Need from "../components/Need";
import Widget from "../components/Widget";
import Speakers from "../components/Speakers";
import About from "../components/About";

export default function Web2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.core.globals("ScrollToPlugin", ScrollToPlugin);
    gsap.to(window, { duration: 0, scrollTo: { y: 0 } });
  }, []);
  return (
    <section className={classes.wrapper}>
      <Header />
      <Hero />
      <Need />
      <Learn />
      <Speakers />
      <Banner />
      <About />
      <Widget />
      <Footer />
    </section>
  );
}
