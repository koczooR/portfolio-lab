import { HeaderNav } from "./HeaderNav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <section className="loginContainer">
        <span>Załóż konto</span>
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
            <label>
              Powtórz hasło
              <input type="password" name="password"></input>
            </label>
          </form>
        </div>
        <div className="loginButtons">
          <Link to="/logowanie">Zaloguj się</Link>
          <a href="/" className="btn">
            Załóż konto
          </a>
        </div>
      </section>
    </>
  );
};
