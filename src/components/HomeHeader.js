import homeHero from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderNav";

export const HomeHeader = () => {
  return (
    <header>
      <HeaderNav />
      <section className="hero">
        <div className="hero__left">
          <img src={homeHero} alt="Home"></img>
        </div>
        <div className="hero__right">
          <span>
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </span>
          <img src={decoration} alt="Decoration"></img>
          <div className="btn-container">
            <Link to="/logowanie" className="btn">
              ODDAJ
              <br />
              RZECZY
            </Link>
            <Link to="/logowanie" className="btn btn-second">
              ZORGANIZUJ
              <br />
              ZBIÓRKĘ
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
