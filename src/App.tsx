import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';
import { Main } from './components/Main';
import { GlobalStyle } from './styles/global';

const App: React.FC = function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/gizon">
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
