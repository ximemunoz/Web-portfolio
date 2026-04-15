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
          <span className="home__education">Digital Animation Engineer and UX/UI Designer focused on creating clear, functional, and visually engaging experiences</span>

          <HeaderSocials/>

          <a href="mailto:ximenamunoz01@gmail.com" className="btn" target='_blank'>Contact Me!</a>

          <ScrollDown/>
          
        </div>
      </section>
    </div>
  )
}

export default Home
