import React from "react";
import { Routes, Route } from "react-router-dom";
import Creature from "../pages/creature";
import Maincontainer from "../pages/main";

function RoutesMain() {
  return (
    <Routes path="/">
      <Route path="/" element={<Maincontainer />} />
      <Route path="/:race" element={<Creature />} />
    </Routes>
  );
}

export default RoutesMain;
