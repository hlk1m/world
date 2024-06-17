import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Detail from "./Detail";
import Home from "./Home";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
