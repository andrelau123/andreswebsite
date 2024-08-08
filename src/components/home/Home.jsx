import React from "react";
import "./home.css";
import profile from "../../assets/andre.png";
import HeaderSocials from "./HeaderSocials";
import Scrolldown from "./Scrolldown";
import Hirebutton from "./Hirebutton";

const Home = () => {
  return (
    <section className="home container">
      <div className="intro">
        <img
          src={profile}
          alt="picture of myself"
          className="home__img"
          width="110"
          height="110"
        />
        <h1 className="home__name">andre lau</h1>
        <span className="home__education">
          i'm an aspiring software engineer!
        </span>

        <HeaderSocials />
        <a href="#contact">
          <Hirebutton />
        </a>
        <Scrolldown />
      </div>
    </section>
  );
};

export default Home;
