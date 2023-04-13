import React, { useEffect, useRef } from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { TbBrandNextjs } from 'react-icons/tb'
import img from '../assets/images/Maskgroup.png'
import '../styles/aboutme.scss'

const Aboutme = () => {
  const sectionInfo = useRef(null)
  const sectionSkill = useRef(null)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          document.querySelector('img').src = img
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  useEffect(() => {
    observer.observe(sectionInfo.current)
    observer.observe(sectionSkill.current)
  }, [])

  return (
    <section id="aboutme" className="Aboutme">
      <div>
        <h2>Sobre mí</h2>
        <div ref={sectionInfo} className="Aboutme__info">
          <img src="" alt="Foto de Luciano Gimenez" />
          <article>
            Me llamo Luciano Gimenez, soy de Buenos Aires , Argentina, me gusta
            todo lo relacionado a la programación y hacer deporte. Estoy
            estudiando la carrera de Lic.en Sistemas en la Universidad de La
            Plata, y de forma autodidacta todo lo relacionado al Front-end.
          </article>
        </div>
      </div>
      <div className="About__skills">
        <h2>Skills</h2>
        <div className="Aboutme__skills" ref={sectionSkill}>
          <div className="Icon_container">
            <span>
              <SiJavascript className="Icon-js item" />
              <span className="hover--title up js">JavaScript</span>
            </span>
            <span>
              <SiHtml5 className="Icon-html item" />
              <span className="hover--title up html">HTML</span>
            </span>
            <span>
              <SiCss3 className="Icon-css item" />
              <span className="hover--title up  css">CSS</span>
            </span>
          </div>

          <div className="Icon_container">
            <span>
              <SiReact className="Icon-react item" />
              <span className="hover--title down react">React</span>
            </span>
            <span>
              <ImGit className="Icon-git item" />
              <span className="hover--title down git">Git</span>
            </span>
            <span>
              <TbBrandNextjs className="Icon-next item" />
              <span className="hover--title down next">Next</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
