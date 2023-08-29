import React from 'react'
import 'animate.css';

import Work from "../Components/Works";
import Testimonials from "../Components/Testimonials";
import billboard from "../Assets/bill-img.png";
import abt from "../Assets/abt-1.png";

const Home =() =>{
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
     
    <section className='abt'>
        <div className="about">
            <div className="abt-img">
                <img src={abt} alt="aisha" />
            </div>

            <div className="abt-text">
                <h2>Who is Aisha</h2>
                <p>Hi, I'm Aisha Mudzingwa, a UI/UX designer passionate about 
                 creating digital products that are both beautiful and functional.
                I have developed a keen eye for design and a deep understanding
                of user-centered design principles. Familiar with design tools like
                Photoshop, Figma, Canva and XD.
                </p>

                <p>Besides being a designer,I also have a certification in digital
                     marketing  as well as background knowledge in web develpment 
                     with knowledge  in Html and CSS . I am looking forward to 
                     the opportunity of working  together and creating something
                      amazing.</p>

                      {/* <button>Read more</button> */}
                      <button class="glow-on-hover" type="button"> READ MORE</button>
            </div>
        </div>
    </section>

    <section className='services'>
         <h2>Services</h2>
         
        <div className="service">
          <div className="save">
            <div className="card-1">
                <div className="text-1">
                <h4><span> Exploring </span> My Design <span> Expertise </span></h4>
                <p>We put your ideas and thus your wishes 
                    in the form of a unique web project 
                    that inspires you and you customers.
                </p>
                <h3>UI/UX <strong>DESIGNER</strong></h3>
                </div>
            </div>


           <div className="card-2">
             <div className="text-2">
                <h1 className='dot'>UI</h1>
                <h3>User Interface design</h3>
                <p>UI design services focus on the visual and aesthetic aspects of a 
                    product or service. They typically include the following Visual 
                    Design , Interface Design, Responsive Design, Style Guides, 
                    Prototyping and Animation activities.
                </p>
             </div>
           </div>


            <div className="card-2">
               <div className="text-2">
                    <h1 className='dot'>UX</h1>
                    <h3>User Experience design</h3>
                    <p>UX design services typically involve the following activities: User 
                        Research, Information Architecture, Interaction Design, Visual Design, 
                        Usability Testing and Accessibility
                    </p>
                </div>
            </div>
         </div>
       </div>
    </section>

    <Work/>
    <Testimonials/>

    <section className='sub-con'>
        <div className="sub-contact">
            <div className="sub-text">
            <h4> Passionate  Designer <br /> Ready to Elevate Your <br /> Experience!</h4>

            <div className="sub-text2">
                <p>Let's collaborate and transform your <br /> vision into a stunning reality.</p>
                <button class="glow-on-hover" type="button"> READ MORE</button>

            </div>
            </div>
            


        </div>


    </section>

   


        























    </div>
  )
}

export default Home