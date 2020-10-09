import React from 'react';
import { StyledNav } from "../styled/stylings";


export const Nav = () => {
  return (
    <StyledNav>
      <header>
        <h2 className="logo">KOJO KWAKYE</h2>
        <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </StyledNav>
  );
}

export default Nav;