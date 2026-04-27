import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="mailto:ximenamunoz01@gmail.com" className="home__social-link" target="_blank">
            <AlternateEmailIcon/>
        </a>
        <a href="https://www.artstation.com/xime_munox01" className="home__social-link" target="_blank">
            <ColorLensOutlinedIcon/>
        </a>
        <a href="https://www.linkedin.com/in/ximena-munoz-b52801306" className="home__social-link" target="_blank">
            <LinkedInIcon/>
        </a>
        <a href="https://github.com/ximemunoz" className="home__social-link" target="_blank">
            <GitHubIcon/>
        </a>
    </div>
  )
}

export default HeaderSocials
