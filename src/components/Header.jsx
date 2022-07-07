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
        <menu>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">Sobre mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </menu>
      </ul>
    </header>
  );
};

export default Header;
