import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/header.scss';

const Header = ({ modal, setOpenModal }) => {
  return (
    <header>
      <ul>
        <h1>Luciano Gimenez</h1>
        <span onClick={() => setOpenModal(!modal)}>
          <GiHamburgerMenu />
        </span>
      </ul>
    </header>
  );
};

export default Header;
