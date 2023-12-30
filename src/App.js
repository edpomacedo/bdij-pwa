// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layouts/Header/Header';
import Container from './layouts/Container/Container';
import Footer from './layouts/Footer/Footer';

// Adicione os componentes para as páginas
import Jurisprudencia from './routes/Jurisprudencia'
import Informativos from './routes/Informativos';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <div>
            {/* Routes no lugar de Switch */}
            <Routes>
              {/* Raiz */}
              <Route path="/" element={<Container />} />
              {/* Rotas de busca */}
              <Route path="/jurisprudencia" element={<Jurisprudencia />} />
              <Route path="/informativos" element={<Informativos />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
