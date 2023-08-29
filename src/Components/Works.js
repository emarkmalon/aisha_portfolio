import { useState } from "react";
import "../Styles/style.css";
import { FaArrowRight} from 'react-icons/fa';




 import  Work_img1 from "../Assets/work-img1.png";
 import  Work_img2 from "../Assets/work-img2.png";
 import  Work_img3 from "../Assets/work-img3.png";
 
function Works() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };



  return (
    <div className="container tab">
        <h2>My Work</h2>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Mobile App
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          UI Designs
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          UX Designs
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className="one container">
          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img1} alt="recipe-img" />
            
            
           <a href="/"><h4>Traveling<FaArrowRight/></h4></a>
             
          </div>
          


          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img2} alt="recipe-img" />
            <a href="/"><h4>Traveling<FaArrowRight/></h4></a>
           
          </div>


          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img3} alt="recipe-img" />
            <a href="/"><h4>Traveling<FaArrowRight/></h4></a>
            
          </div>

          </div>
   </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
             
        <div className="two container">
          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img2} alt="recipe-img" />
            <a href="/"><h4>Car Rental<FaArrowRight/></h4></a>
           
          </div>


          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img2} alt="recipe-img" />
            <a href="/"><h4>Car Rental<FaArrowRight/></h4></a>
           
          </div>


          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img3} alt="recipe-img" />
            <a href="/"><h4>Car Rental<FaArrowRight/></h4></a>
           
          </div>

          </div>


         
         
       </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
        <div className="three container">
          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img1} alt="recipe-img" />
            <a href="/"><h4>Mining<FaArrowRight/></h4></a>
           
          </div>


          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img2} alt="recipe-img" />
            <a href="/"><h4>Mining<FaArrowRight/></h4></a>
            
          </div>


          <div className="card col-xs-12 col-md-4 col-lg-4">
            <img src={Work_img3} alt="recipe-img" />
            <a href="/"><h4>Mining<FaArrowRight/></h4></a>
           
          </div>

          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default Works;


