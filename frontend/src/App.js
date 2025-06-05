import React, { useEffect, useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
