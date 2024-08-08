import React from "react";

const Aboutbox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i class="fa-brands fa-java about__icon"></i>

        <div>
          <h3 className="about__title">6 years</h3>
          <span className="about__sub">experience in programming</span>
        </div>
      </div>

      <div className="about__box">
        <i class="fa-brands fa-react about__icon"></i>

        <div>
          <h3 className="about__title">3</h3>
          <span className="about__sub">
            React/React Native Projects completed
          </span>
        </div>
      </div>

      <div className="about__box">
        <i class="fa-solid fa-r about__icon"></i>

        <div>
          <h3 className="about__title">2 years</h3>
          <span className="about__sub">
            experience with R and data analytics
          </span>
        </div>
      </div>

      <div className="about__box">
        <i class="fa-solid fa-person-running about__icon"></i>

        <div>
          <h3 className="about__title">193km</h3>
          <span className="about__sub">Distance ran this year</span>
        </div>
      </div>
    </div>
  );
};

export default Aboutbox;
