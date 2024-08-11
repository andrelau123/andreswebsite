import React from "react";
import "./about.css";
import photo from "../../assets/andrephoto.png";
import Example from "./Example";
import Aboutbox from "./Aboutbox";
import Button from "./Button";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About myself</h2>
      <div className="about__container grid">
        <Example />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              hi, i'm andre and i chase opportunity. i'm 22 this year and
              currently studying information systems in NUS.
            </p>
            <a href="../../components/resume.pdf" download className="button">
              <Button />
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Programming</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Leadership skills</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">
                  Editing: DaVinci Resolve + Premier Pro
                </h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage edit"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Aboutbox />
    </section>
  );
};

export default About;
