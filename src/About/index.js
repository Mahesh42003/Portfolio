import { CiFacebook,CiLinkedin  } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import './index.css'

const About=() => (
    <div>
        <h1 className="about-me">About Me</h1>
        <hr className="horizontal-width"/> 
        <div className='about-me-paragraph-and-image'>
        <div>
        <p className='paragraph-width'>Hey, I have recently Completed my graduation in Electronics And Communication Engineering at SVCET,Chittoor.As 
            part of that i have interested and eager for building the web applications using the React.js.And my carrer goal is to became a 
            Frontend Developer working at Top Product Based Companies.
            <hr />
            <div className='flexing-of-Phone-and-email'>
            <div>
                <h4>Phone</h4>
                <p>6301331913</p>
            </div> 
            <div>
                <h4>Email</h4> 
                <p>mahesh.gudipati2020@gmail.com</p>
            </div>
         </div>
         </p>
         </div> 
         <div>
          <div className='background-color-of-social-media-links'>
            <a href="https://www.facebook.com/profile.php?id=100066002684161" target="__">
            <CiFacebook className="size-of-icon"/>
            </a>
            <a href="https://www.instagram.com/mahi_mom_lover123/?hl=en" target="__">
            <BiLogoInstagram className="size-of-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/mahesh-gudipati/" target="__">
              <CiLinkedin className="size-of-icon"/>
            </a>
            <a href="https://x.com/GudipatiMahesh6?t=B8cQElqKh1G3Z4q5olWG2A&s=09" target="__">
            <RiTwitterXLine className="size-of-icon"/>
            </a>
          </div>
         </div>
        </div>
    </div>
) 
export default About