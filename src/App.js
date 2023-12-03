import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <div class="container-fluid">
        <div class="row mb-5">
          <Sidebar />
          <Container />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
