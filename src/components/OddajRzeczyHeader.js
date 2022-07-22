import oddajrzeczyimg from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

export const OddajRzeczyHeader = () => {
  return (
    <section className="hero">
      <div className="hero__left-oddajrzeczy">
        <img src={oddajrzeczyimg} alt="Home"></img>
      </div>
      <div className="hero__right">
        <span>
          Oddaj rzeczy, których już nie chcesz <br />
          POTRZEBUJĄCYM
        </span>
        <img src={decoration} alt="Decoration" className="decorationImg"></img>
        <span className="fourStepsText">Wystarczą 4 proste kroki:</span>
        <div className="rectangle__container">
          <div className="rectangle">
            <span className="rectangle__number">1</span>
            <span className="rectangle__text">Wybierz rzeczy</span>
          </div>
          <div className="rectangle">
            <span className="rectangle__number">2</span>
            <span className="rectangle__text">Spakuj je w worki</span>
          </div>
          <div className="rectangle">
            <span className="rectangle__number">3</span>
            <span className="rectangle__text">Wybierz fundację</span>
          </div>
          <div className="rectangle">
            <span className="rectangle__number">4</span>
            <span className="rectangle__text">Zamów kuriera</span>
          </div>
        </div>
      </div>
    </section>
  );
};
