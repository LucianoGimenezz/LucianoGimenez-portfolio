import React from 'react'
import { BiMenu } from 'react-icons/bi'
import '../styles/header.scss'

const Header = ({ modal, setOpenModal }) => {
  return (
    <header>
      <ul>
        <h1>Luciano Gimenez</h1>
        <span onClick={() => setOpenModal(!modal)}>
          <BiMenu />
        </span>
        <menu>
          <li>
            <a href="#home">Home</a>
          </li>
          <div className="ruleHome"></div>
          <li>
            <a href="#aboutme">Sobre mí</a>
          </li>
          <div className="ruleAbout"></div>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <div className="ruleProyect"></div>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <div className="ruleContact"></div>
        </menu>
      </ul>
    </header>
  )
}

export default Header
