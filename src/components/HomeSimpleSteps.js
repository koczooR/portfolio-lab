import decoration from "../assets/Decoration.svg";
import tshirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import search from "../assets/Icon-3.svg";
import order from "../assets/Icon-4.svg";
import { FourColumnsBox } from "./FourColumnsBox";
import { Link } from "react-router-dom";

export const HomeSimpleSteps = () => {
  return (
    <section className="simpleSteps" id="simpleSteps">
      <div className="simpleSteps__header">
        <span>Wystarczą 4 proste kroki</span>
        <img src={decoration} alt="Decoration"></img>
      </div>
      <div className="fourColumns">
        <div className="fourColumnsContainer">
          <FourColumnsBox image={tshirt} columnTitle="Wybierz rzeczy" columnText="ubrania, zabawki, sprzęt i inne" />
          <FourColumnsBox image={bag} columnTitle="Spakuj je" columnText="skorzystaj z worków na śmieci" />
          <FourColumnsBox image={search} columnTitle="Zdecyduj komu chcesz pomóc" columnText="wybierz zaufane miejsce" />
          <FourColumnsBox image={order} columnTitle="Zamów kuriera" columnText="kurier przyjedzie w dogodnym terminie" />
        </div>
      </div>
      <div className="btn-container">
        <Link to="/logowanie" className="btn">
          ODDAJ RZECZY
        </Link>
      </div>
    </section>
  );
};
