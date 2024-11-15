
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroHome from "../../components/HeroHome/HeroHome";
import Department from "../../components/Depatment/Department";
import TeamAll from "../../components/TeamAll/TeamAll";
import Footer from "../../components/Footer/Footer";


export default function About() {
  return (
    <>
      <Navbar n={false}/>
      <HeroHome h={false} title={"About"} Section={"About"} />
      <Department/>
      <TeamAll/>
      <Footer m={false}/>
      
      
     
    </>
  );
}