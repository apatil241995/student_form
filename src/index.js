import React from 'react';
import './index.css';
import Header from "./Components/Header/Header";
import Userform from './Components/Userform/userform';
import Footer from './Components/Footer/Footer';
import Userlist from './Components/Userlist/userlis';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/userform' element={<Userform />} />
        <Route path='/userlist' element={<Userlist />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
);
reportWebVitals();
