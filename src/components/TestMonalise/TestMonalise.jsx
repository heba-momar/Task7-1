import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import "./TestMonalise.css";
import testimg1 from "/image/testiThumb3_1.webp";
import testimg2 from "/image/testiThumb3_2.webp";
import testimg3 from "/image/testiThumb3_3.webp";
import TestMonaliseCard from "../TestMonaliseCard/TestMonaliseCard";
 const dataTestMonalise=[
  {
    img: testimg1,
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad.",
    name: "Kristin Watson",
    position: "Web Designer",
  },
  {
    img: testimg2,
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad.",
    name: "Theresa Webb",
    position: "Tech Enthusiast",
  },
  {
    img: testimg3,
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad.",
    name: "Round Richards",
    position: "Web Entrepreneur",
  },
 ]
export default function TestMonalise() {
  return (
    <>
      <section className="hm-testandcontact-section">

        <div className="hm-parent">
          <div className="hm-contact-section">
            <div>
              <img
                className="hm-contact-image"
                src="/image/ctaThumb1_1.webp"
                alt="Contact Image"
              />
            </div>
            <div>
              <img
                className="hm-contact-shape"
                src="/image/ctaShape1_1.webp"
                alt="Contact Shape"
              />
            </div>

            <div className="hm-contact-details">
              <h3>
                <HiOutlineArrowLongLeft />
                <span> CONTACT US </span>
                <HiOutlineArrowLongRight />
              </h3>
              <p>24/7 Expert Hosting Support Our Customers Love</p>
            </div>

            <div>
              <button>
                {" "}
                TALK TO A SPECIALIST <HiOutlineArrowLongRight />
              </button>
            </div>
          </div>
        </div>


        <div className="hm-testimonials-section">
          <div className="hm-testimonials-details">
            <p className="hm-testimonials-title">
              <HiOutlineArrowLongLeft /> TESTIMONIALS{" "}
              <HiOutlineArrowLongRight />
            </p>
            <h3 className="hm-testimonials-description">
              Our Latest Client Feedback
            </h3>
          </div>
         
          <div className="hm-all-cards">
            { dataTestMonalise.map((data, index) => (
              <TestMonaliseCard
                key={index}
                img={data.img}
                paragraph={data.paragraph}
                name={data.name}
                position={data.position}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
