// import React from 'react';
// import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

// const Testimonials = () => {
//     const cardsTestimonial = [
//         {img: require('../Assets/faith.png'), name:'Joe Doe', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:1},
//         {img: require('../Assets/faith.png'), name:'John Smith', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:2},
//         {img: require('../Assets/faith.png'), name:'Jane Doe', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:3},
//         {img: require('../Assets/faith.png'), name:'Bob Smith', company:'Company Name', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id:4},
        
//       ];
// return (
//    <section className='testimony'>
//       <div className="testimony-text">
//         <h4>What <span> people say </span> about <span>me </span> and <span>my work </span></h4>
//         <p>Besides being a designer,I also have a certification in digital marketing  as well as background knowledge in web develpment with knowledge in Html and CSS . I am looking forward to the opportunity of working  together and creating something amazing.</p>
//         <div className='test-arrow'>
//           <BsFillArrowLeftCircleFill  />
//           <BsFillArrowRightCircleFill  />
//         </div>
//       </div>
//       <div className="testimony-info">
//         {cardsTestimonial.map((test) => (
//             <div className="test-card">
//                 <div className="test-img">
//                     <img src={test.img} alt="pic" />
//                 </div>
//                 <div className="test-text">
//                    <h3>{test.name}</h3>
//                    <h6>{test.company}</h6>
//                    <p>{test.description}</p>

//                 </div>
//                 </div>
//             ))}
//         </div>
//   </section>
//   )
// }

// export default Testimonials



import React, { useRef } from 'react';
import Slider from 'react-slick';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const cardsTestimonial = [
    { img: require('../Assets/faith.png'), name: 'Faith Murerwa', company: 'Digital Marketer', description: ' Im always inspired by Aisha’s creativity and out-of-the-box thinking. She has an incredible knack for coming up with innovative design concepts that push boundaries and captivate users. She is an exceptional collaborator who seamlessly integrates into any design team.', id: 1 },
    { img: require('../Assets/denzel.png'), name: 'Denzel Maupa', company: 'Designer', description: 'I was really challenged by the design project that I collaborated on with classmate Aisha.  We had to overcome a lot of obstacles, but we were able to do it by working together. She’s creative, innovative, and  always deliver on time. She always take our ideas and turn them into reality. I am really proud of the work that we produced, and I know that it would nnot have been possible without our collaboration.', id: 2 },
    { img: require('../Assets/malo.png'), name: 'Emark Nyakudya', company: 'Frontend Web devoloper', description: 'I learned a lot from collaborating with Aisha on our group project for our design class. She were really good at coming up with new ideas, and was always willing to share her knowledge with me. I am a better developer because of our collaboration.We both put in a lot of hard work, and it really paid off.', id: 3 },
    { img: require('../Assets/rudo.png'), name: 'Rudo Mapanda', company: 'Digital Marketer', description: 'I worked with designer Aisha on my new website design, and I was really impressed with their work. She was able to take my vision and turn it into a reality, and was always responsive to my feedback. I would definitely recommend her  to anyone looking for a great web designer.', id: 4 },
  ];

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimony">
      <div className="testimony-text">
        <h4>
          What <span> people say </span> about <span>me </span> and <span>my work </span>
        </h4>
        <p>
          Besides being a designer,I also have a certification in digital marketing as well as background knowledge in web development with knowledge in Html and CSS. I am looking forward to the opportunity of working together and creating something amazing.
        </p>
        <div className="test-arrow">
          <BsFillArrowLeftCircleFill  onClick={() => sliderRef.current.slickNext()}/>
          <BsFillArrowRightCircleFill   onClick={() => sliderRef.current.slickPrev()}/>
         
        </div>
      </div>
      <Slider ref={sliderRef} className="testimony-info" {...sliderSettings}>
        {cardsTestimonial.map((test) => (
          <div className="test-card" key={test.id}>
            <div className="test-img">
              <img src={test.img}alt="pic" />
            </div>
            <div className="test-text">
              <h3>{test.name}</h3>
              <h6>{test.company}</h6>
              <p>{test.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;