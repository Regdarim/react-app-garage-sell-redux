import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import cart from "../assets/icons/supermarket.svg";
import { connect } from "react-redux";

const NavBar = (props) => {
  const { home, aboutProject, contact } = routes;
  const { setBuyCounter } = props;
  return (
    <nav className="navbar">
      <div className="navbar-start is-centered">
        {/* <span class="icon">
        <i class="fas fa-home"></i>
      </span> nie laduja sie ikonki z bulmy */}
        <Link to={home} className="navbar-item">
          Home
        </Link>
        <Link to={aboutProject} className="navbar-item">
          About Project
        </Link>
        <Link to={contact} className="navbar-item">
          Contact
        </Link>
        {/* <Link to="/UsersMails" className="navbar-item">
          Users Mails
        </Link> */}
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <span>{props.setBuyCounter}</span>
          <img src={cart} alt="" />
        </div>
        <div className="navbar-item"></div>

        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary is-outlined">
              <strong>Sign up</strong>
            </a>
            <a className="button is-info is-outlined ">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  const { setBuyCounter } = state;
  return { setBuyCounter: setBuyCounter };
};

export default connect(mapStateToProps)(NavBar);
