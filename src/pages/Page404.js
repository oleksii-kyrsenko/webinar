
import React from "react";
import image from "../assets/images/404.svg";
import Container from "../components/commons/Container";

const Page404 = () => {
  return (
      <section className="page-404">
        <Container>
          <div className="page-404__body">
            <div className="page-404__image">
              <img src={image} alt="Page not found" />
            </div>
            <p className="page-404__text">
              The page you are looking for is not available
            </p>
          </div>
        </Container>
      </section>
  );
};

export default Page404;
