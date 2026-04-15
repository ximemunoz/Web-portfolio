import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-1.jpg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am a Digital Animation Engineer specializing in UX/UI design and frontend development. I’m passionate about creating digital experiences that are not only visually engaging, but also functional and user-centered. I combine design thinking with technical skills to build clear, efficient, and practical interfaces. I’m continuously learning and expanding my skill set, and I am <strong>currently seeking opportunities to grow as a UX/UI Designer while contributing value to digital products.</strong></p>
            <a href="https://drive.google.com/file/d/149loPmV6lfDq_UTAaFR5D6tmHOwCn7Fj/view?usp=sharing" className="btn" target="_blank">Download CV</a>
          </div>

          <div className="about__skills">
            <h3 className="skills__title">Skills</h3>

            <div className="skills__list">
              <p><strong>UX/UI:</strong></p>
              <p>Wireframing, Prototyping, Design Systems, Interaction Design, Usability & Visual Consistency</p>
              <p><strong>Tools:</strong></p>
              <p>Figma, Adobe Suite, Visual Studio, Visual Studio Code, Autodesk Maya</p>
              <p><strong>Development:</strong></p>
              <p>React, HTML, CSS, JavaScript, C#, C++, Python, XML, GitHub</p>
            </div>
          </div>

          {/* <div className="about__skills grid">

            <div className="skills__data">
                <h2 className="skills__name">UI/UX</h2>
              <div className="skills__titles">
                <h3 className="skills__name">User Flows</h3>
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

  </div> */}
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About
