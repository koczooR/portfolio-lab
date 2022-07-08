import decoration from "../assets/Decoration.svg";
import { useState } from "react";
import { Fundations } from "./Fundations";
import { Pagination, Pagination2 } from "./Pagination";

export const HomeWhoWeHelp = () => {
  const [fundationIsActive, setFundationIsActive] = useState(true);
  const [organizationIsActive, setOrganizationIsActive] = useState(false);
  const [localIsActive, setLocalIsActive] = useState(false);

  const fundationButton = () => {
    setFundationIsActive(true);
    setOrganizationIsActive(false);
    setLocalIsActive(false);
  };

  const organizationButton = () => {
    setOrganizationIsActive(true);
    setFundationIsActive(false);
    setLocalIsActive(false);
  };

  const localButton = () => {
    setLocalIsActive(true);
    setFundationIsActive(false);
    setOrganizationIsActive(false);
  };

  let headerText = "";
  if (fundationIsActive) {
    headerText = "Fundacji";
  }

  if (organizationIsActive) {
    headerText = "Organizacji";
  }

  if (localIsActive) {
    headerText = "Zbiórek";
  }

  const fundation = [
    {
      title: "Fundacja “Dbam o Zdrowie”",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { title: "Fundacja “Dla dzieci”", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    { title: "Fundacja “Bez domu”", text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce" },
  ];

  const organization = [
    {
      title: "Organizacja “Dbam o Zdrowie”",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { title: "Organizacja “Dla dzieci”", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    { title: "Organizacja “Bez domu”", text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce" },
  ];

  const local = [
    {
      title: "Zbiórka “Dbam o Zdrowie”",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { title: "Zbiórka “Dla dzieci”", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    { title: "Zbiórka “Bez domu”", text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce" },
  ];

  return (
    <section className="whoWeHelp" id="whoWeHelp">
      <div className="whoWeHelp__header">
        <span>Komu pomagamy?</span>
        <img src={decoration} alt="Decoration"></img>
      </div>
      <div className="whoWeHelp__buttons">
        <button className={fundationIsActive ? "btn-active" : "btn"} onClick={fundationButton}>
          Fundacjom
        </button>
        <button className={organizationIsActive ? "btn-active" : "btn"} onClick={organizationButton}>
          Organizacjom pozarządowym
        </button>
        <button className={localIsActive ? "btn-active" : "btn"} onClick={localButton}>
          Lokalnym zbiórkom
        </button>
      </div>
      <span className="whoWeHelp__text">
        W naszej bazie znajdziesz listę zweryfikowanych {headerText}, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </span>
      <div className="carousel">
        {fundationIsActive ? fundation.map((item, index) => <Fundations key={index} title={item.title} text={item.text} items={item.items} />) : null}
        {organizationIsActive ? organization.map((item, index) => <Fundations key={index} title={item.title} text={item.text} items={item.items} />) : null}
        {localIsActive ? local.map((item, index) => <Fundations key={index} title={item.title} text={item.text} items={item.items} />) : null}
        {fundationIsActive ? <Pagination /> : null}
        {organizationIsActive ? <Pagination2 /> : null}
      </div>
    </section>
  );
};
