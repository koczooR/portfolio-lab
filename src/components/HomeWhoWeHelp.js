import decoration from "../assets/Decoration.svg";
import { useState } from "react";
import { Fundations } from "./Fundations";
import { Pagination } from "./Pagination";

export const HomeWhoWeHelp = () => {
  const [fundationIsActive, setFundationIsActive] = useState(true);
  const [organizationIsActive, setOrganizationIsActive] = useState(false);
  const [localIsActive, setLocalIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const fundationButton = () => {
    setCurrentPage(1);
    setFundationIsActive(true);
    setOrganizationIsActive(false);
    setLocalIsActive(false);
  };

  const organizationButton = () => {
    setCurrentPage(1);
    setOrganizationIsActive(true);
    setFundationIsActive(false);
    setLocalIsActive(false);
  };

  const localButton = () => {
    setCurrentPage(1);
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
      id: 1,
      title: "Fundacja “Dbam o Zdrowie” 1",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { id: 2, title: "Fundacja “Dla dzieci” 2", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    {
      id: 3,
      title: "Fundacja “Bez domu” 3",
      text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
    {
      id: 4,
      title: "Fundacja “Dbam o Zdrowie” 4",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { id: 5, title: "Fundacja “Dla dzieci” 5", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    {
      id: 6,
      title: "Fundacja “Bez domu” 6",
      text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
    {
      id: 7,
      title: "Fundacja “Dbam o Zdrowie” 7",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { id: 8, title: "Fundacja “Dla dzieci” 8", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    {
      id: 9,
      title: "Fundacja “Bez domu” 9",
      text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
  ];

  const organization = [
    {
      id: 1,
      title: "Organizacja “Dbam o Zdrowie” 1",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { id: 2, title: "Organizacja “Dla dzieci” 2", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    {
      id: 3,
      title: "Organizacja “Bez domu” 3",
      text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
    {
      id: 4,
      title: "Organizacja “Dbam o Zdrowie” 4",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { id: 5, title: "Organizacja “Dla dzieci” 5", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    {
      id: 6,
      title: "Organizacja “Bez domu” 6",
      text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
  ];

  const local = [
    {
      id: 1,
      title: "Zbiórka “Dbam o Zdrowie”",
      text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    { id: 2, title: "Zbiórka “Dla dzieci”", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki" },
    {
      id: 3,
      title: "Zbiórka “Bez domu”",
      text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentFundationPosts = fundation.slice(indexOfFirstPost, indexOfLastPost);
  const currentOrganizationPosts = organization.slice(indexOfFirstPost, indexOfLastPost);
  const currentLocalPosts = local.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {fundationIsActive ? <Fundations posts={currentFundationPosts} /> : null}
        {fundationIsActive ? <Pagination postsPerPage={postsPerPage} totalPosts={fundation.length} paginate={paginate} /> : null}

        {organizationIsActive ? <Fundations posts={currentOrganizationPosts} /> : null}
        {organizationIsActive ? <Pagination postsPerPage={postsPerPage} totalPosts={organization.length} paginate={paginate} /> : null}

        {localIsActive ? <Fundations posts={currentLocalPosts} /> : null}
        {localIsActive ? <Pagination postsPerPage={postsPerPage} totalPosts={local.length} paginate={paginate} /> : null}
      </div>
    </section>
  );
};
