import { HeaderNav } from "./HeaderNav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <section className="loginContainer">
        <span>
          Wylogowanie nastąpiło <br />
          pomyślnie!
        </span>
        <img src={decoration} alt="Decoration"></img>
        <div className="logoutButton">
          <Link to="/" className="btn">
            Strona główna
          </Link>
        </div>
      </section>
    </>
  );
};
