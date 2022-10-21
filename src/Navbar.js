import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src="./brandonlogo.png" className="nav-logo" alt="profile" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
