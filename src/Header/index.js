import { Component } from "react"; 
import Resume from '../Files/Mahi resume (1).pdf'
import About from '../About/index.js'
import Education from '../Education/index.js'
import Skills from '../Skills/index.js'
import PortFolio from '../Portfolio/index.js'
import Contact from '../Contact/index.js'
import Footer from '../Footer/index.js'
import './index.css'

class Header extends Component {
    state={Active:"About"} 

    clickingAbout=() => {
        this.setState({Active:"About"})
    } 

    clickingEducation=() => {
        this.setState({Active:"Education"})
    }

    clickingSkills=() => {
        this.setState({Active:"Skills"})
    } 

    clickingContact=() => {
        this.setState({Active:"Contact"})
    }

    clickingPortfolio=() => {
        this.setState({Active:"Portfolio"})
    } 

    render(){
        const {Active}=this.state
        return(
            <div className="entire-background-color">
            <div className="styling-for-nav-items-and-name">
                <h3 className="spacing-left-for-name">Mahesh</h3>
                <nav>
                    <ul className="styling-of-nav-items">
                        <a href="#about"className={Active === "About"?"activeState each-list-item-styling":"inActiveState each-list-item-styling"} onClick={this.clickingAbout}>
                        <li>About</li>
                        </a>
                        <a className={Active === "Education"?"activeState each-list-item-styling":"inActiveState each-list-item-styling"} href="#education" onClick={this.clickingEducation}>
                        <li>Education</li>
                        </a>
                        <a className={Active === "Skills"?"activeState each-list-item-styling":"inActiveState each-list-item-styling"} href="#Skills" onClick={this.clickingSkills}>
                          <li>Skills</li> 
                        </a>
                        <a href="#portfolio" className={Active === "Portfolio"?"activeState each-list-item-styling":"inActiveState each-list-item-styling"} onClick={this.clickingPortfolio}>
                        <li>Portfolio</li>
                        </a>
                        <a href="#contact" className={Active === "Contact"?"activeState each-list-item-styling":"inActiveState each-list-item-styling"} onClick={this.clickingContact}>
                        <li>Contact</li>
                        </a>
                    </ul>
                </nav>
            </div> 
             <div className="background-profile-photo"> 
                 <h2 className="styling-of-Name">Hi,<br/>
                 I am Mahesh <br/>
                 Gudipati.</h2> 
                 <p className="styling-of-Name ">UI/UX Designer And Frontend developer</p>
                 <a href={Resume} download="Mahesh.pdf" className="styling-of-download-button">
                    Download Resume
                 </a>
             </div> 
             <section id="about">
                 <About/>
             </section> 
             <section id="education">
                <Education/>
             </section> 
             <section id="Skills">
                <Skills/>
             </section>
             <section id="portfolio">
                <PortFolio/>
             </section>
             <section id="contact">
                <Contact/>
             </section>  
             <Footer/>
            </div>
        )
    }
} 
export default Header 