
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroHome from "../../components/HeroHome/HeroHome";
import Getln from'../../components/Getln/Getln'
import Footer from "../../components/Footer/Footer";


export default function Contact() {
  return (
    <>
      <Navbar n={false}/>
      <HeroHome h={false} title={"Contact Us"} Section={"Contact Us"} />
    <Getln/>
    <Footer m={false}/>
    </>
  );
}