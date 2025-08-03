// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ['home', 'about', 'services', 'team', 'contact'];

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Nivritti Legal</h1>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <ul className={`md:flex md:gap-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        {pages.map((page) => (
          <li
            key={page}
            className={`cursor-pointer capitalize p-2 ${
              currentPage === page ? 'text-blue-600 font-semibold' : ''
            }`}
            onClick={() => {
              setCurrentPage(page);
              setMenuOpen(false);
            }}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
