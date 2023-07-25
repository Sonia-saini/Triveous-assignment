import React from "react";
import { Route, Routes } from "react-router-dom";
import Allnews from "../Pages/Allnews";
import Login from "../Pages/Login";
import SingleNews from "../Pages/SingleNews";
import Register from "../Pages/Registeration";

function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allnews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailnews/:name" element={<SingleNews />} />
      </Routes>
    </div>
  );
}

export default Allroute;
