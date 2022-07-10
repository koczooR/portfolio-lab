import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

export const HomeContact = () => {
  return (
    <section className="contact" id="contact">
      <div className="form">
        <span>Skontaktuj się z nami</span>
        <img src={decoration} alt="Decoration"></img>
        <form>
          <div>
            <label className="label-name">
              Wpisz swoje imię
              <input type="text" name="name"></input>
            </label>
            <label>
              Wpisz swój email
              <input type="text" name="email"></input>
            </label>
          </div>
          <label>
            Wpisz swoją wiadomość
            <textarea type="text" name="text"></textarea>
          </label>
          <button>Wyślij</button>
        </form>
      </div>
      <div className="footer">
        <span>Copyright by Coders Lab</span>
        <div className="iconsContainer">
          <img src={facebook} alt="Facebook Icon"></img>
          <img src={instagram} alt="Instagram Icon"></img>
        </div>
      </div>
    </section>
  );
};
