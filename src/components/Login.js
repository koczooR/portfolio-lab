import { HeaderNav } from "./HeaderNav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <section className="loginContainer">
        <span>Zaloguj się</span>
        <img src={decoration} alt="Decoration"></img>
        <div className="loginBox">
          <form>
            <label>
              Email
              <input type="text" name="email"></input>
            </label>
            <label>
              Hasło
              <input type="password" name="password"></input>
            </label>
          </form>
        </div>
        <div className="loginButtons">
          <Link to="/rejestracja">Załóż konto</Link>
          <a href="/" className="btn">
            Zaloguj się
          </a>
        </div>
      </section>
    </>
  );
};
