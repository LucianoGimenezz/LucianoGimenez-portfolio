import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/header.scss';

const Header = () => {
  return (
    <header>
      <ul>
        <h1>Luciano Gimenez</h1>
        <span>
          <GiHamburgerMenu />
        </span>
      </ul>
    </header>
  );
};

export default Header;
