import React, { Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import classes from "./styles/App.module.scss";
import {Loader} from "./components/Loader"
const Banner = React.lazy(() => import('./components/Banner'));
const Footer = React.lazy(() => import('./components/Footer'));
const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const Learn = React.lazy(() => import('./components/Learn'));
const Need = React.lazy(() => import('./components/Need'));
const Widget = React.lazy(() => import('./components/Widget'));
const Speakers = React.lazy(() => import('./components/Speakers'));
const About = React.lazy(() => import('./components/About'));

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.core.globals("ScrollToPlugin", ScrollToPlugin);
    gsap.to(window, { duration: 0, scrollTo: {y:0} });
  }, []);



  return (
    
    <section className={classes.wrapper}>
      <Suspense fallback={<Loader/>}>
      <Header />
      <Hero/>
      <Need/>
      <Learn/>
      <Speakers/>
      <Banner/>
      <About/>
      <Widget/>
      <Footer/>
      </Suspense>
    </section>
  );
}

export default App;
