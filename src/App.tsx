import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import { config } from "./core/config";
import { CookiesMessage } from "./components/CookiesMessage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename={config.baseUrl}>
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
        <CookiesMessage />
      </Router>
    </>
  );
};

export default App
