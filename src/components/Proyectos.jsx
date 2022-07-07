import React, { useEffect, useRef } from 'react';
import '../styles/proyectos.scss';
import todoImg from '../assets/images/todoApp.png';
import avatarProfile from '../assets/images/avatarProfile.png';

const Proyectos = () => {
  const modalStack = useRef(null);
  const modalStackAP = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.childNodes[1].classList.add('Stackvisible');
            }, 1000);
          } else {
            entry.target.childNodes[1].classList.remove('Stackvisible');
          }
        });
      },
      {
        threshold: 1
      }
    );

    observer.observe(modalStack.current);
    observer.observe(modalStackAP.current);
  }, []);

  return (
    <section className="Proyectos">
      <h2>Proyectos</h2>
      <div className="Proyectos__container">
        <div className="Proyectos__items">
          <div className="Proyectos__imagesContainer">
            <img src={todoImg} alt="Foto de la aplicacion de TODOS" />
            <div className="modal-stack" ref={modalStack}>
              <p>Stack</p>
              <ul>
                <li>React</li>
              </ul>
            </div>
          </div>
          <p>TODO APP</p>
          <div className="button__container">
            <a
              href="https://github.com/LucianoGimenezz/todo-app"
              target="_blank"
              className="codigo"
            >
              Codigo
            </a>
            <a
              href="https://lucianogimenezz.github.io/todo-app/"
              target="_blank"
              className="deploy"
            >
              Deploy
            </a>
          </div>
        </div>

        <div className="Proyectos__items">
          <div className="Proyectos__imagesContainer">
            <img
              src={avatarProfile}
              alt="Foto de la pagina de un avatar profile"
            />
            <div className="modal-stack" ref={modalStackAP}>
              <p>Stack</p>
              <ul>
                <li>JavaScript</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </div>
          </div>
          <p>Avatar profile</p>
          <div className="button__container">
            <a
              href="https://github.com/LucianoGimenezz/Avatar-profile"
              target="_blank"
              className="codigo"
            >
              Codigo
            </a>
            <a
              target="_blank"
              href="https://62b335da1b503e0c98a4971e--celebrated-moxie-0ce782.netlify.app/"
              className="deploy"
            >
              Deploy
            </a>
          </div>
        </div>

        <div className="Proyectos__items">
          <img />
          <div className="button__container">
            <a className="codigo">Codigo</a>
            <a className="deploy">Deploy</a>
          </div>
        </div>
        <div className="Proyectos__items">
          <img />
          <div className="button__container">
            <a className="codigo">Codigo</a>
            <a className="deploy">Deploy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
