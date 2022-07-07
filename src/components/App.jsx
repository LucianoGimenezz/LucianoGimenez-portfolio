import React, { useEffect, useState } from 'react';
import '../styles/hero.scss';
import Aboutme from './Aboutme';
import Contacto from './Contacto';
import Header from './Header';
import Menu from './Menu';
import Proyectos from './Proyectos';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle
} from 'react-icons/ai';

const App = () => {
  const [modal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      location.hash = '';
      setTimeout(() => {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTo(0, 0);
          console.log('Up');
        }
      }, 1000);
    });
  }, []);

  return (
    <>
      <Header modal={modal} setOpenModal={setOpenModal} />
      {modal && <Menu modal={modal} setOpenModal={setOpenModal} />}
      <section id="home" className="Hero">
        <div className="Hero__content">
          <p>Hola,</p>
          <p>soy</p>
          <p>Luciano Gimenez</p>
          <p>Desarrollador</p>
          <p>
            Front-end <span>|</span>
          </p>
        </div>
        <a href="#contacto" className="Hero__button">
          Contáctame!
        </a>
      </section>
      <Aboutme />
      <Proyectos />
      <Contacto />
      <footer>
        <div className="socialmedia">
          <span>
            <a target="_blank" href="https://github.com/LucianoGimenezz">
              <AiFillGithub />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luciano-martin-gimenez-52986a1ba/"
            >
              <AiFillLinkedin />
            </a>
          </span>
        </div>
        <div>
          <span>
            <AiOutlineCopyrightCircle />
          </span>
          <p>Luciano Gimenez 2022</p>
        </div>
      </footer>
    </>
  );
};

export default App;
