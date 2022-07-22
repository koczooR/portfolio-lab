import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import hamburgerMenu from "../assets/icons8-menu-60.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const HeaderNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navigation">
      <button className="hamburgerMenu" onClick={() => setIsExpanded(!isExpanded)}>
        <img src={hamburgerMenu} alt="Menu"></img>
      </button>
      <ul className="navigation__login">
        <li>{currentUser && <p>{`Cześć ${currentUser.email}!`}</p>}</li>
        <li>
          {currentUser ? (
            <Link to="/wylogowano" onClick={logout}>
              Wyloguj
            </Link>
          ) : (
            <Link to="/logowanie">Zaloguj</Link>
          )}
        </li>
        <li>
          {currentUser ? (
            <Link to="/oddaj-rzeczy" className="btn-register">
              Oddaj rzeczy
            </Link>
          ) : (
            <Link to="/rejestracja" className="btn-register">
              Załóż konto
            </Link>
          )}
        </li>
      </ul>
      <ul className={isExpanded ? "navigation__menu expanded" : "navigation__menu"}>
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
        <ScrollLink to="contact" smooth={true} className="btn-kontakt">
          Kontakt
        </ScrollLink>
      </ul>
    </nav>
  );
};
