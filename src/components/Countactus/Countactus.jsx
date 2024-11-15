import './Countactus.css'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
export default function Countactus() {
  return (
    <section className='parents'>
    <div className='HM-contactus-section'>
        <div><img className='HM-contactus-image' src="/image/ctaThumb1_1.webp" alt="contact" /></div>

        <div className='HM-Contactusdeatils'>
            <h3><HiOutlineArrowLongLeft /><span>  CONTACT US  </span><HiOutlineArrowLongRight /></h3>
            <p>24/7 Expert Hosting Support Our Customers Love</p>
        </div>

        <div>
            <button className='HM-coutactusbutton'> TALK TO A SPECIALST <HiOutlineArrowLongRight/></button>
        </div>
    </div>
</section>
  )
}
