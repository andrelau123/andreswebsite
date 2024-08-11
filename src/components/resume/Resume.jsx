import React, { useState } from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  const [togglestate, settogglestate] = useState(1);

  const toggletab = (index) => {
    settogglestate(index);
    console.log(togglestate);
  };

  function Edu() {
    return (
      <div className="grid">
        <div className="timeline grid">
          <div className="timecon">
            {Data.map((val, id) => {
              if (val.catagory == "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                    info={val.info}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }

  const Ex = () => {
    return (
      <div className="resume__sections grid">
        <div className="timeline grid">
          <div className="timecon">
            {Data.map((val, id) => {
              if (val.catagory == "experience") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                    info={val.info}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Qualifications</h2>

      <div className="resume__container">
        <div className="resume__tab">
          <div
            className={
              togglestate === 1
                ? "educationbutton resume__active"
                : "educationbutton"
            }
            onClick={() => toggletab(1)}
          >
            <i class="fa-solid fa-graduation-cap"></i>&nbsp;Education
          </div>

          <div
            className={
              togglestate === 2
                ? "educationbutton resume__active"
                : "educationbutton"
            }
            onClick={() => toggletab(2)}
          >
            <i class="fa-solid fa-briefcase"></i>&nbsp;Experience
          </div>
        </div>
        <div className="resumeinfo">
          {togglestate == 1 && <Edu />}
          {togglestate == 2 && <Ex />}
        </div>
      </div>
    </section>
  );
};

export default Resume;
