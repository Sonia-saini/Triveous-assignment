import React from "react";
import { Route, Routes } from "react-router-dom";
import Allnews from "../Pages/Allnews";
import Login from "../Pages/Login";
import SingleNews from "../Pages/SingleNews";
import Register from "../Pages/Registeration";
import Authentication from "../component/Authentication";

function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication><Allnews /></Authentication>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailnews/:name" element={<Authentication><SingleNews /></Authentication>} />
      </Routes>
    </div>
  );
}

export default Allroute;
