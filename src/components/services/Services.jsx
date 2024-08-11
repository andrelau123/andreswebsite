import React from "react";
import "./services.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical levels</span>

      <div className="service__container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Services;
