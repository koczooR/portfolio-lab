import { HeaderNav } from "./HeaderNav";
import decoration from "../assets/Decoration.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Register = () => {
  const navigate = useNavigate();
  const defaultState = { email: "", password: "", password2: "" };
  const [formValues, setFormValues] = useState(defaultState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setRegisterEmail(formValues.email);
    setRegisterPassword(formValues.password);
  };

  const register = async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      try {
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  register();

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

    if (values.password !== values.password2) {
      errors.password2 = "Hasła muszą być takie same!";
    } else if (values.password2.length < 6) {
      errors.password2 = "Podane hasło jest za krótkie!";
    }
    return errors;
  };

  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <section className="loginContainer">
        <span>Załóż konto</span>
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
            <label>
              Powtórz hasło
              <input type="password" name="password2" value={formValues.password2} onChange={handleChange}></input>
            </label>
            <p className="error">{formErrors.password2}</p>
          </div>
          <div className="loginButtons">
            <Link to="/logowanie">Zaloguj się</Link>
            <button className="btn">Załóż konto</button>
          </div>
        </form>
      </section>
    </>
  );
};
