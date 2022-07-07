import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

export const HomeAboutUs = () => {
  return (
    <section className="aboutUs" id="aboutUs">
      <div className="aboutUs__left">
        <span className="aboutUs__left-title">O nas</span>
        <img src={decoration} alt="Decoration"></img>
        <span className="aboutUs__left-text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
          parsnip.
        </span>
        <img src={signature} className="signature" alt="Signature"></img>
      </div>
      <div className="aboutUs__right"></div>
    </section>
  );
};
