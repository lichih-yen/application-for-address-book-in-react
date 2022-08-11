import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register.jsx";
import Edit from "./components/Edit.jsx";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <>
      <NavBar />

      <h3 className="head-title">Address Book</h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
