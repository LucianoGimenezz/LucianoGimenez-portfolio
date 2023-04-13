import React, { useEffect, useState } from 'react'
import '../styles/hero.scss'
import Aboutme from './Aboutme'
import Contacto from './Contacto'
import Header from './Header'
import Menu from './Menu'
import Proyectos from './Proyectos'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle
} from 'react-icons/ai'

const App = () => {
  const [modal, setOpenModal] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => {
      location.hash = ''
      setTimeout(() => {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTo(0, 0)
        }
      }, 1000)
    })
  }, [])

  const getCurrentYear = () => new Date().getFullYear()

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
            Full Stack Web <span>|</span>
          </p>
        </div>
        <div className='Hero__button-container'>
          <a href="#contacto" className="Hero__button">
            Contáctame!
          </a>
          <a
            href='https://drive.google.com/file/d/1pWC1r-7Oq8F6qjoDk20XyOVZk79Ygn3e/view?usp=share_link'
            className="Hero__button Hero__button--download"
            download='CV.pdf'
            target='_blank' rel="noreferrer"
            >
            Descargar CV
          </a>
        </div>
      </section>
      <Aboutme />
      <Proyectos />
      <Contacto />
      <footer>
        <div className="socialmedia">
          <span>
            <a target="_blank" href="https://github.com/LucianoGimenezz" rel="noreferrer">
              <AiFillGithub />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luciano-martin-gimenez-52986a1ba/" rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </span>
        </div>
        <div>
          <span>
            <AiOutlineCopyrightCircle />
          </span>
          <p>Luciano Gimenez {getCurrentYear()}</p>
        </div>
      </footer>
    </>
  )
}

export default App
