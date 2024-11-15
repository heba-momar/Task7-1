import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import './PricingAll.css';
import Pricing from '../Pricing/Pricing';

export default function PricingAll() {
  return (
    <section className='HMpricing-section'>
      <p className='HMpricing-title'>
        <HiOutlineArrowLongLeft /> OUR PRICING <HiOutlineArrowLongRight />
      </p>
      <h3 className='HMpricing-description'>Our Awesome Pricing Plans</h3>

      <div className='HMpricing-container'>
        <Pricing />
        <Pricing />
        <Pricing />
      </div>
    </section>
  );
}
