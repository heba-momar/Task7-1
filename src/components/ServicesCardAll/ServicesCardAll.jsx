
import ServiesHome from "../ServiesHome/ServiesHome";
import ServiceRequirement from "../ServiceRequirement/ServiceRequirement";
import "./ServicesCardAll.css";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2";

import icon1 from "./../../../public/image/serviceIcon1_2.svg";
import icon2 from "./../../../public/image/serviceIcon1_3.svg";
import icon3 from "./../../../public/image/serviceIcon1_4.svg";
import icon4 from "./../../../public/image/serviceIcon1_1.svg";

const CardDataa =[
  {
    icon: icon1,
    title: "Woo Commerce",
    Discrpation:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem aut molestias eaque. Veniam totam eum eaque amet?",
  },
  {
    icon: icon2,
    title: "CRM Solutions",
    Discrpation:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem aut molestias eaque. Veniam totam eum eaque amet?",
  },
  {
    icon: icon3,
    title: "Web Design",
    Discrpation:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem aut molestias eaque. Veniam totam eum eaque amet?",
  },
  {
    icon: icon4,
    title: "Data Guard Sentinel",
    Discrpation:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem aut molestias eaque.",
  },
 ]

 const SERData =[
  {
    number: "01",
    title: "Requirement",
    pargraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    pargraph:
     "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
  },
  {
    number: "03",
    title: "Prototype",
    pargraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "04",
    title: "Development",
    pargraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
 ]

export default function ServicesCard() {
  return (
    <section className="HM-Services">
      <p className="destitle">
        <HiOutlineArrowLongLeft /> OUR SERVICES <HiOutlineArrowLongRight />
      </p>
      <h3>Elevating Businesses With IT Ingenuity</h3>
      
      <div className="all-cards">
        {CardDataa.map((data, index) => (
          <ServiesHome
            key={index}
            icon={data.icon}
            title={data.title}
            Discrpation={data. Discrpation}
          />
        ))}
      </div>

      <div className="HM-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uWQ_8CtvzoY?si=TKCub8yxb97EbKLR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="HM-servrq">
        {SERData.map((data, index) => (
          <ServiceRequirement
            key={index}
            number={data.number}
            title={data.title}
            pargraph={data.pargraph}
          />
        ))}
      </div>
    </section>
  );
}
