import React from 'react';
import '../styles/hero.scss';
import Aboutme from './Aboutme';
import Header from './Header';
import Proyectos from './Proyectos';

const App = () => {
  return (
    <>
      <Header />
      <section className="Hero">
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
    </>
  );
};

export default App;
