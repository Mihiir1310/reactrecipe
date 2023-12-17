
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:label" element={<RecipeDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
