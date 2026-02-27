import React from 'react'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"/>

            <div>
                <h3 className="about__title">127</h3>
                <span className="about__subtitle">Proyectos Escolares Completados</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"/>

            <div>
                <h3 className="about__title">71289</h3>
                <span className="about__subtitle">Tazas de Café</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-graduation"/>

            <div>
                <h3 className="about__title">42</h3>
                <span className="about__subtitle">Materias Cursadas con Éxito</span>
            </div>
        </div>

        
    </div>
  )
}

export default AboutBox
