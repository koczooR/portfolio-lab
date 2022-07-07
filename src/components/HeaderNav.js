import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const HeaderNav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__login">
        <li>
          <Link to="/logowanie">Zaloguj</Link>
        </li>
        <li>
          <Link to="/rejestracja" className="btn-register">
            Załóż konto
          </Link>
        </li>
      </ul>
      <div className="navigation__menu">
        <Link to="/" className="btn-start">
          Start
        </Link>
        <ScrollLink to="simpleSteps" smooth={true}>
          O co chodzi?
        </ScrollLink>
        <ScrollLink to="aboutUs" smooth={true}>
          O nas
        </ScrollLink>
        <ScrollLink to="whoWeHelp" smooth={true}>
          Fundacja i organizacje
        </ScrollLink>
        <a href="/" className="btn-kontakt">
          Kontakt
        </a>
      </div>
    </nav>
  );
};
