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
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-pencil"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#picture" className="nav__link">
                <i className="icon-camera"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-phone"></i>
              </a>
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
