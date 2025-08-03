// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageRenderer from './components/PageRenderer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageRenderer currentPage={currentPage} />
    </div>
  );
};

export default App;
