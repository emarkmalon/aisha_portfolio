import React from 'react'

import billboard from "../Assets/bill-img.png";
import { FaPhone,FaInstagram,FaEnvelope} from 'react-icons/fa';


function Contact() {
  return (
    <div>
        <section className='billboard'>
        <div className="billboard-info">
            <div className="billboard-text">
                <p className='p1'>Hey! there i am </p>
                <h1 class="animate-charcter">Aisha Mudzingwa</h1>
                <h5>I am a <span> UI/UX Designer</span></h5>
                <p className='p2'>Welcome to my website . I am looking forward 
                    to the opportunity  of working together and
                     creating something amazing. My goal as a 
                     designer is to deliver the work as assigned.
                </p>
                {/* <button>Let’s talk</button> */}
                <button class="glow-on-hover" type="button"> LET'S TALK</button>
             </div>

             <div className="billboard-img">
                <img src={billboard} alt="laptop" />

             </div>
        </div>
    </section>


    <section className='contract'>

      <div className="contract-card">
        <div className="contract-text">
          <h3>INFO</h3>
          <div className="contra">
            <FaEnvelope/>

            <p><a href="/">mudzingwaaisha03@gmail.com</a></p>

          </div>
          <div className="contra">
          <FaEnvelope/>

            <p>166 Westwoood Drive Kambuzuma Zimbabwe</p>

          </div>

          <div className="contra">
            < FaPhone/>

            <p>+263782581205</p>

          </div>

          <div className="contra">
            <FaInstagram />

            <p><a href="/">mudzingwaaisha03@gmail.com</a></p>

          </div>
          



        </div>




      </div>

      <div class="contract-form">

              <h2>Get In Touch </h2>
              


              <form action="https://formsubmit.co/emarknyakudya@gmail.com" method="POST">

                  <input type="text" id="name" name="name" placeholder="Your name"/>
                  <input type="text" id="phone" name="phone" placeholder="Your phone number"/>
                  <input type="text" id="email" name="email" placeholder="Your email"/>                             

                  <textarea id="mssg" name="mssg" placeholder="Your message"></textarea>

                  
                <input type="submit" value="Send" />

              </form>

          </div>

      




    </section>


   



    </div>
  )
}

export default Contact