import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-1.jpg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Acerca de Mí</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description"> Mi nombre es Ximena, actualmente trabajo como becaria en el área de Coordinación de Ingenierías en donde administro el sitio web y apoyo en la logística del evento Open Doors. Tengo experiencia en diseño gráfico en con los programas Photoshop e Illustrator.</p>
            <a href="https://drive.google.com/file/d/1V05x19d9bDpqEBaje4JFGI07MsQ-QpMr/view?usp=sharing" className="btn" target="_blank">Download CV</a>
          </div>
          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Illustrator/Photoshop</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ilttPhsh"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Diseño Gráfico</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Dibujo</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage drawing"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Código</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage coding"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About
