// src/components/PageRenderer.jsx
import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Contact from '../pages/Contact';

const PageRenderer = ({ currentPage }) => {
  switch (currentPage) {
    case 'home': return <Home />;
    case 'about': return <About />;
    case 'services': return <Services />;
    case 'team': return <Team />;
    case 'contact': return <Contact />;
    default: return <Home />;
  }
};

export default PageRenderer;
