import { HeaderNav } from "./HeaderNav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Login = () => {
  const defaultState = { email: "", password: "" };
  const [formValues, setFormValues] = useState(defaultState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.email) {
      errors.email = "Podany email jest nieprawidłowy!";
    } else if (!regex.test(values.email)) {
      errors.email = "Podany email ma nieprawidłowy format!";
    }

    if (values.password.length < 6) {
      errors.password = "Podane hasło jest za krótkie!";
    }
    return errors;
  };

  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <section className="loginContainer">
        <span>Zaloguj się</span>
        <img src={decoration} alt="Decoration"></img>

        <form onSubmit={handleSubmit}>
          <div className="loginBox">
            <label>
              Email
              <input type="text" name="email" value={formValues.email} onChange={handleChange}></input>
            </label>
            <p className="error">{formErrors.email}</p>
            <label>
              Hasło
              <input type="password" name="password" value={formValues.password} onChange={handleChange}></input>
            </label>
            <p className="error">{formErrors.password}</p>
          </div>
          <div className="loginButtons">
            <Link to="/rejestracja">Załóż konto</Link>
            <button className="btn">Zaloguj się</button>
          </div>
        </form>
      </section>
    </>
  );
};
