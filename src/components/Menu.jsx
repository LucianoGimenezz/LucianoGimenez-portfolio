import React from 'react'
import { createPortal } from 'react-dom'
import '../styles/menuModal.scss'
import { AiOutlineClose } from 'react-icons/ai'

const Menu = ({ modal, setOpenModal }) => {
  return createPortal(
    <div className="Menu">
      <span onClick={() => setOpenModal(!modal)}>
        <AiOutlineClose className="Icon" />
      </span>
      <ul onClick={() => setOpenModal(!modal)}>
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
      </ul>
    </div>,
    document.getElementById('modal')
  )
}

export default Menu
