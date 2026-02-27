import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.jpg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div>
      <section className="home container" id="home">
      
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Ximena Muñoz</h1>
          <span className="home__education">Estudiante de Ingeniería en Animación en la Universidad Panamericana</span>

          <HeaderSocials/>

          <a href="http://ig.me/m/munox_01" className="btn" target='_blank'>Contrátame</a>

          <ScrollDown/>
          
        </div>
      </section>
    </div>
  )
}

export default Home
