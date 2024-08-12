import React from "react";
import "./contact.css";
import { List } from "./List";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <h2 className="section__title">contact me.</h2>
      <div className="contact__container">
        <List />
      </div>
    </section>
  );
};

export default Contact;
