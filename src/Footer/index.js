import { FaHome } from "react-icons/fa";
import { IoPersonCircle  } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { GiBrokenHeart } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { CiFacebook,CiLinkedin  } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import './index.css'

const Footer=() => (
    <footer className="entire-footer-colour">
        <div className="entire-icons-styling">
        <a href=" " className="each-icon-styling" alt="home">
            <FaHome className="height-and-width-of-icons"/>
            </a> 
        <a href="#about" className="each-icon-styling"><IoPersonCircle className="height-and-width-of-icons"/></a> 
        <a href="#education" className="each-icon-styling"><MdCastForEducation className="height-and-width-of-icons"/></a>
        <a href="#Skills" className="each-icon-styling"><GiBrokenHeart className="height-and-width-of-icons"/></a> 
        <a href="#portfolio" className="each-icon-styling"><GoProjectRoadmap className="height-and-width-of-icons"/></a>
        <a href="#contact" className="each-icon-styling"><IoIosContact className="height-and-width-of-icons"/></a>
        <div className="social-media-styling">
        <a href="https://www.facebook.com/profile.php?id=100066002684161" target="__" >
        
            <CiFacebook className="size-of-icon additional-size"/>
            </a>
            <a href="https://www.instagram.com/mahi_mom_lover123/?hl=en" target="__">
            <BiLogoInstagram className="size-of-icon additional-size"/>
            </a>
            <a href="https://www.linkedin.com/in/mahesh-gudipati/" target="__">
              <CiLinkedin className="size-of-icon additional-size"/>
            </a>
            <a href="https://x.com/GudipatiMahesh6?t=B8cQElqKh1G3Z4q5olWG2A&s=09" target="__">
            <RiTwitterXLine className="size-of-icon additional-size"/>
            </a> 
            <a href="https://github.com/Mahesh42003" target="__">
                <FaGithub className="size-of-icon additional-size"/>
            </a>
            </div>
        <p className="margin-left-for-copy-right">Copyright © Gudipati Mahesh.All Rights Reserved.</p>
        </div>
    </footer>
) 
export default Footer 