import decoration from "../assets/Decoration.svg";

export const HomeWhoWeHelp = () => {
  return (
    <section className="whoWeHelp" id="whoWeHelp">
      <div className="whoWeHelp__header">
        <span>Komu pomagamy?</span>
        <img src={decoration} alt="Decoration"></img>
      </div>
      <div className="whoWeHelp__buttons">
        <button className="btn btn-fundations">Fundacjom</button>
        <button className="btn">Organizacjom pozarządowym</button>
        <button className="btn">Lokalnym zbiórkom</button>
      </div>
      <span className="whoWeHelp__text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
      </span>
      <div className="carousel"></div>
    </section>
  );
};
