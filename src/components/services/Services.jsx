import React from "react";
import "./services.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Services = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical levels</span>

      <div className="skills__container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Services;
