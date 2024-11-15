import { FaRegStar } from "react-icons/fa";
import "./TestMonaliseCard.css";
import { TiStarFullOutline } from "react-icons/ti";


export default function TestMonaliseCard({ paragraph, img, name, position }) {
  return (
    
       <div >
      <div className="hm-testimonials">

        <div className="hm-stars">
          <TiStarFullOutline className="hm-FilledStar" />
          <TiStarFullOutline className="hm-FilledStar" />
          <TiStarFullOutline className="hm-FilledStar" />
          <TiStarFullOutline className="hm-FilledStar" />
          <FaRegStar className="hm-OStar" />
        </div>
        <p>{paragraph}</p>


        <div className="hmcard-info">
          <div className="hm-picturetitle">
            <img src={img} alt={name} className="hm-testimonials-img" />
            <div>
              <h3>{name}</h3>
              <span>{position}</span>
            </div>
          </div>
          <img
            src="./image/right-quotation-sign-svgrepo-com.svg"
            className="hm-quotation"
            alt=""
          />
        </div>
      </div>
    </div>

   
  );
}
