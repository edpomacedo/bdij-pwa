import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div class="container-fluid">
        <div class="row mb-5">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
