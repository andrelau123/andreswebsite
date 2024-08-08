import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo"></a>
      <img src={logo} alt="logo" width="100px" height="100px" />

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link"></a>
              <i className="icon-home"></i>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link"></a>
              <i className="icon-user-following"></i>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link"></a>
              <i className="icon-briefcase"></i>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link"></a>
              <i className="icon-graduation"></i>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link"></a>
              <i className="icon-layers"></i>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link"></a>
              <i className="icon-note"></i>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link"></a>
              <i className="icon-bubble"></i>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2027</span>
      </div>
    </aside>
  );
};

export default Sidebar;
