import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import "./TeamAll.css";
import TeamCard from "../TeamCard/TeamCard";
import img1 from "../../../public/image/04.webp"
import img2 from "../../../public/image/05.webp"
import img3 from "../../../public/image/06.webp"
import img4 from "../../../public/image/07.webp"
const teamData=[
    {
        img: img1, 
        name:'masirul Islam' , 
        
        title:'Web Designer'
    }, 
    {
        img: img2, 
        name:'Jessica Mardol' ,
         title:'Cyber Expert'
        }, 
    {
        img: img3,
         name:'Arnold Hemingway' ,
         title:'Web Expert'
        }, 
    {
      img: img4, 
        name:'Shikon Haque' ,
         title:'Data Analyst'
        }, 
]
export default function TeamAll() {
  return (
    <section>
    <div className="team-section">
      <p className="team-title">
        <HiOutlineArrowLongLeft />TEAM MEMBERS<HiOutlineArrowLongRight />
      </p>
      <h3 className="team-description">Our Dedicated Members</h3>
    </div>

    <div className="Teamcard">
    { teamData .map((data, index) => (
          <TeamCard 
            key={index}
            img={data.img}
            name={data.name}
           title={data.title}
          />
        ))}
    </div>
    </section>
  );
}
