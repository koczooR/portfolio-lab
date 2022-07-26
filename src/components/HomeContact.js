import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import { useState, useEffect } from "react";

export const HomeContact = () => {
  const defaultState = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(defaultState);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormSuccess(true);

      fetch(API, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((formValues) => {
          console.log(formValues);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFormSuccess(false);
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.email) {
      errors.email = "Podany email jest nieprawidłowy!";
    } else if (!regex.test(values.email)) {
      errors.email = "Podany email ma nieprawidłowy format!";
    }

    if (!values.name) {
      errors.name = "Podane imię jest nieprawidłowe!";
    }

    if (values.message.length < 120) {
      errors.message = "Wiadomość musi mieć co najmniej 120 znaków!";
    }
    return errors;
  };

  return (
    <section className="contact" id="contact">
      <div className="form">
        <span>Skontaktuj się z nami</span>
        <img src={decoration} alt="Decoration"></img>
        {formSuccess && <p className="success">Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label className="label-name">
                Wpisz swoje imię
                <input type="text" name="name" value={formValues.name} onChange={handleChange}></input>
              </label>
              <p className="error">{formErrors.name}</p>
            </div>
            <div>
              <label>
                Wpisz swój email
                <input type="text" name="email" value={formValues.email} onChange={handleChange}></input>
              </label>
              <p className="error">{formErrors.email}</p>
            </div>
          </div>
          <label>
            Wpisz swoją wiadomość
            <textarea type="text" name="message" value={formValues.message} onChange={handleChange} />
          </label>
          <p className="error">{formErrors.message}</p>
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
