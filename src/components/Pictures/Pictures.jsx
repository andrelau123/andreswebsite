import React from "react";
import { Picturedata } from "./Picturedata";
import "./pictures.css";

const Pictures = () => {
  return (
    <section className="pictures container section" id="picture">
      <h2 className="section__title">pictures.</h2>
      <h3 className="section__subtitle">a snippet of my life</h3>

      <section className="picture__container">
        <Picturedata />
      </section>
    </section>
  );
};

export default Pictures;
