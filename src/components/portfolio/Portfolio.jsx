import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setitems] = useState(Menu);
  const [num, setnum] = useState(1);

  const filterItem = (catagory) => {
    const updated = Menu.filter((curelement) => {
      return curelement.catagory == catagory;
    });
    setitems(updated);
  };

  const handlenum = (num) => setnum(num);
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">recent works.</h2>

      <div className="work__filters">
        <span
          className={num == 1 ? "work__item selected" : "work__item"}
          onClick={() => {
            setitems(Menu);
            setnum(1);
          }}
        >
          Everything
        </span>
        <span
          className={num == 2 ? "work__item selected" : "work__item"}
          onClick={() => {
            filterItem("coding");
            setnum(2);
          }}
        >
          Coding
        </span>
        <span
          className={num == 3 ? "work__item selected" : "work__item"}
          onClick={() => {
            filterItem("design");
            setnum(3);
          }}
        >
          Design
        </span>
        <span
          className={num == 4 ? "work__item selected" : "work__item"}
          onClick={() => {
            filterItem("writing");
            setnum(4);
          }}
        >
          Writing
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, catagory, desc, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="image thumbnail" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__catagory">{catagory}</span>
              <h3 className="work__title">{title}</h3>
              <h3 className="work__desc">{desc}</h3>
              <a href={link} className="work__button" target="_blank">
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
