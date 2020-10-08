import React from 'react';
import { StyledNav } from "../styled/nav"

const Nav = () => {
  return (
    <StyledNav>
      <nav>
        <h1>KOJO KWAKYE</h1>
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
    </StyledNav>
  );
}

export default Nav;