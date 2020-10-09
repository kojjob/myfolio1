import React from "react";
import {StyledFooter} from "../styled/stylings";

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <p>&copy; by Kojo Kwakye {new Date().getFullYear()}</p>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
