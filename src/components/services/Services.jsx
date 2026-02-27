import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Comisiones de Dibujo",
    description:
      "¿Quires una ilustración personalizada? Podemos trabajar una ilustración artística o un diseño de vectores que se acomode a tus necesidades.",
  },
  {
    id: 2,
    image: Image2,
    title: "Diseño Web",
    description:
      "¿Te gustaría que tu página web fuera más atractiva visualmente? Puedo diseñar una página que refleje tu estilo.",
  },
  {
    id: 3,
    image: Image3,
    title: "Edición de Video",
    description:
      "¿Quisieras hacer un montaje digital de tus recuerdos favoritos? Puedo ayudarte a hacer edición de video básica",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Servicios</h2>

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
