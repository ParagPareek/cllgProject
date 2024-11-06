import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [theme, setTheme] = useState("light-theme");
  const [demo, setDemo] = useState(true);

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setDemo(true);
    } else {
      setTheme("dark-theme");
      setDemo(false);
    }
  };

  useEffect(() => {
    document.body.className = theme; // Apply theme to body
  }, [theme]);

  return (
    <>
      <section id="header">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>

        <div>
          <ul id="navbar">
            <li>
              <Link className="active nav-link" to={"/"}>
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/shop/"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/Blog/"}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/about/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/contact/"}>
                Contact
              </Link>
            </li>
            <li className="lg-bag">
              <Link className="nav-link" to={"/cart/"}>
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
            <a href="#" id="close">
              <i className="fa-solid fa-xmark"></i>
            </a>
            {demo ? (
              <i className="ri-sun-fill" onClick={toggleTheme} style={{paddingLeft:"10px",fontSize:"25px"}}></i>
            ) : (
              <i className="ri-moon-fill" onClick={toggleTheme} style={{paddingLeft:"10px",fontSize:"25px"}}></i>
            )}
            <li>
              <Link className="login-btn" to={"/login/"}>
                Login
              </Link>
            </li>
            <li style={{ padding: "0px" }}>
              <Link className="login-btn" to={"/signup/"}>
                SignUp
              </Link>
            </li>
         
           
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
