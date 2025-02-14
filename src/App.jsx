import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import Items from "./Components/Items";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/items/:order?" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
