import decoration from "../assets/Decoration.svg";

export const FormThankYou = () => {
  return (
    <section className="formStep1">
      <p className="step2Title">
        Dziękujemy za przesłanie formularza <br />
        Na maila prześlemy wszelkie <br />
        informacje o odbiorze.
      </p>
      <img src={decoration} alt="Decoration" />
    </section>
  );
};
