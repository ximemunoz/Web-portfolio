import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://instagram.com/munox_01?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="home__social-link" target="_blank">
            <InstagramIcon/>
        </a>

        <a href="https://x.com/xime_na01?s=21" className="home__social-link" target="_blank">
            <TwitterIcon/>
        </a>

        <a href="https://www.artstation.com/xime_munox01" className="home__social-link" target="_blank">
            <ColorLensOutlinedIcon/>
        </a>
        
        <a href="" className="home__social-link" target="_blank">
            <LinkedInIcon/>
        </a>
    </div>
  )
}

export default HeaderSocials
