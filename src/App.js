import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

// Adicione os componentes para as páginas
import Ementas from './components/Search/Ementas';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row mb-5">
            <Sidebar />
            {/* Routes no lugar de Switch */}
            <Routes>
              {/* Raiz */}
              <Route path="/" element={<Container />} />
              {/* Rotas de busca */}
              <Route path="/ementas" element={<Ementas />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
