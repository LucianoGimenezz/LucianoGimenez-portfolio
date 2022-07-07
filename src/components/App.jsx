import React, { useState } from 'react';
import '../styles/hero.scss';
import Aboutme from './Aboutme';
import Contacto from './Contacto';
import Header from './Header';
import Menu from './Menu';
import Proyectos from './Proyectos';

const App = () => {
  const [modal, setOpenModal] = useState(false);

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
        <button className="Hero__button">Contáctame!</button>
      </section>
      <Aboutme />
      <Proyectos />
      <Contacto />
    </>
  );
};

export default App;
