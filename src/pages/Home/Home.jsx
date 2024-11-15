import "./Home.css";
import Navbar from "../../components/Navbar/Navbar"
import HeroHome from "../../components/HeroHome/HeroHome";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import ServiesHomeAll from "../../components/ServicesCardAll/ServicesCardAll"
import PricingAll from "../../components/PricingAll/PricingAll";
import Countactus from "../../components/Countactus/Countactus";
import TestMonalise from "../../components/TestMonalise/TestMonalise";
import BlogAll from "../../components/BlogAll/BlogAll";
import Footer from "../../components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar x={true} />
      <HeroHome h={true} />
      <HomeIcon />
    <ServiesHomeAll/>
    <PricingAll/>
    <Countactus/>
    <TestMonalise/>
    <BlogAll/>
    <Footer z={true}/>
</>
  );
}
