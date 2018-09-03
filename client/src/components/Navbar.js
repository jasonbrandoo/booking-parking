import React from 'react';

const Navbar = () => (
  <header>
    <nav>
      <ul className="flex-navbar">
        <li>
          <a href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="about.html">
            Service
          </a>
        </li>
        <li className="register">
          <a href="index.html">
            Regsiter
          </a>
        </li>
        <li>
          <a href="about.html">
            Login
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
