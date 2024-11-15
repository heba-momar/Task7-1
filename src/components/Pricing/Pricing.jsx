
import { GiCheckMark } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";
import { RxQuestionMarkCircled } from 'react-icons/rx';
import './Pricing.css'
export default function Pricing() {
  return (
      <div className='HMpricing'>
      <div className='HMpricing-header'>
        <div className='HMpricing-details'>
          <h4>Regular Plans</h4>
          <h3>$49 <span className="HMpricing-period">/Month</span></h3>
        </div>
        <div>
          <img className='HMpricing-icon' src="/image/pricingIcon1_1.svg" alt="Pricing Icon" />
        </div>
      </div>

      <div className='HM-features'>
        <ul>
          <li><span><GiCheckMark className='icon-check'/> 100 GB SSD Storage</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> Weekly Backups</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> Unlimited Free SSL</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> 24/7 System Monitoring</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> Free Domain ($9.99)</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><IoIosClose className='icon-cross'/> Frame 164236</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><IoIosClose className='icon-cross'/> 20+ Payment Methods</span> <RxQuestionMarkCircled className="icon-info" /></li>
        </ul>
      </div>

      <button className='HMpricing-button'>
        GET STARTED NOW
      </button>

      <div className='dimoned'>

      </div>
    </div>
  );
  
}
