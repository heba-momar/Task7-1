import "./Home.css";
import NavbarHome from "../../components/NavbarHome/NavbarHome"
import HeroHome from "../../components/HeroHome/HeroHome";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import AllServiesHome from "../../components/AllServiesHome/ServiesHome";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <HeroHome />
      <HomeIcon />
      <AllServiesHome />
    
    </>
  );
}
