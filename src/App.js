import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { OddajRzeczy } from "./components/OddajRzeczy";
import { Register } from "./components/Register";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowano" element={<Logout />} />
          <Route path="/oddaj-rzeczy" element={<OddajRzeczy />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
