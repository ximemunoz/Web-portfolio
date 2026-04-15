import React from 'react'
import "./services.css"
import Image1 from "../../assets/research_icon.svg"
import Image2 from "../../assets/ideation_icon.svg"
import Image3 from "../../assets/design_icon.svg"
import Image4 from "../../assets/iteration_icon.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Research",
    description:
      "Understanding user needs and problems",
  },
  {
    id: 2,
    image: Image2,
    title: "Ideation",
    description:
      "Exploring solutions and user flows",
  },
  {
    id: 3,
    image: Image3,
    title: "Design",
    description:
      "Wireframes and UI design",
  },

  {
    id: 4,
    image: Image4,
    title: "Iteration",
    description:
      "Testing and improving the experience",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Design Process</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
