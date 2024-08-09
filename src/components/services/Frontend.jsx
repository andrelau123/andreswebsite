import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">Reactjs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">React Native</h3>
              <span className="skills__level">Intermediate</span>
            </div>

            <div className="skills__data">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <h3 className="skills__name">HTML + CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
