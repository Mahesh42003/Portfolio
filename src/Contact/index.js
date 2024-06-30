import { Component } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './index.css'

class Contact extends Component {
    state={Name:"",Email:"",Description:""}

    sendMessage=() => {
        const {Name,Email,Description}=this.state
        if(Name.length > 0 && Email.length > 0 && Description.length > 0){
           alert("I will get in touch with you shortly.") 
           this.setState({Name:"",Email:"",Description:""})
        }
    } 

    enteringName=(Event) => {
        this.setState({Name:Event.target.value})
    } 

    enteringEmail=(Event) => {
        this.setState({Email:Event.target.value})
    } 

    enteringDescription=(Event) => {
        this.setState({Description:Event.target.value})
    }

    render(){
        const {Name,Email,Description}=this.state
    return(
    <div>
        <h1 className='Education-heading'>Contact Me</h1>
        <hr className='horizontal-width'/>
        <div className="flexing-of-form-and-imformation-element">
        <div className="flexing-of-whatsapp-and-email">
            <div className="background-of-whatsapp">
            <FaWhatsapp className="whatsapp-logo-size"/> 
            <h1>Whatsapp</h1>
            <article>
            <a href="https://api.whatsapp.com/send?phone=6301331913" target="__" className="anchor-element-styling">
                Send a Message
            </a>
            </article> 
            </div>
            <div className="background-of-whatsapp">
              <MdEmail className="email-logo-size"/>
              <h1>Email</h1>
              <h1 className="email-owner">mahesh.gudipati2020@gmail.com</h1>
              <article>
              <a href="mailto:mahesh.gudipati2020@gmail.com" target="__" className="anchor-element-styling">
                 Send a Message
              </a>
              </article>
            </div> 
            </div>
            <form className='flexing-of-form-item'>
            <input type="text" placeholder='Your Name' className='width-of-textarea-element width-of-input-element' required value={Name} onChange={this.enteringName}/>
            <input type="text" placeholder='Your Email' className='width-of-textarea-element width-of-input-element' required value={Email} onChange={this.enteringEmail}/>
            <textarea rows="16" cols="8" placeholder='Your Message' className='width-of-textarea-element' required value={Description} onChange={this.enteringDescription}>
                {}
            </textarea>
            <button className='submit-button-styling' onClick={this.sendMessage}>Send</button>
        </form> 
        </div>
    </div>
    )
}
}
export default Contact 