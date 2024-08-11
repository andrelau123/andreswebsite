import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setitems] = useState(Menu);
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent works</h2>

      <div className="work__filters">
        <span className="work__item">Everything</span>
        <span className="work__item">Coding</span>
        <span className="work__item">Design</span>
        <span className="work__item">Writing</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, catagory, desc } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="image thumbnail" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__catagory"></span>{" "}
              <h3 className="work__title">{title}</h3>
              <a href="" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
