import { IoLocation, IoMailOpenSharp } from "react-icons/io5";
import "./Getln.css";
import { FaPhone } from "react-icons/fa";

export default function Getln() {
  return (
    <>
      <div className="information-container">
        <div >
          <div className="Information">
            <div className="Information-inside">
              <FaPhone className="Information-icon" />
              <div>
                <p>Call Us 9/24</p>
                <a href="tel:+951205166">+963951205166</a>
              </div>
            </div>
            <div className="Information-line"></div>
            <div className="Information-inside">
              <IoMailOpenSharp className="Information-icon" />
              <div>
                <p>Make A Quote</p>
                <a href="mailto:hebamomar851@gmail.com">
                HebaMomar@gmail.com
                </a>
              </div>
            </div>
            <div className="Information-line"></div>
            <div className="Information-inside">
              <IoLocation className="Information-icon" />
              <div>
                <p>Location</p>
                <a href="Location: Syria Aleppo">
                 syria Aleppo Aleppo
                </a>
              </div>
            </div>
            <img className="information-img" src="./image/video.webp" alt="" />
          </div>
        </div>

        <div>
        <div className="contact-form">
            <h2>Ready to Get Started?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.</p>
            <form>
                <div>
                    <div >
                    <div className="form-group">
                    <label htmlFor="name">Your Name*</label>
                    <input type="text" id="name" required />
                </div>

                    </div>
                    <div >
                    <div className="form-group">
                    <label htmlFor="email">Your Email*</label>
                    <input type="email" id="email" required />
                </div>
                        
                        </div>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="message">Write Message*</label>
                    <textarea id="message" rows="4" required></textarea>
                </div>
            </form>
            <button type="submit">Send Message ➔</button>

        </div>
        </div>
      </div>


   
     
            <iframe  className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.026653993!2d5.279370299999999!3d52.2129919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1731696155089!5m2!1sar!2snl"
             allowfullscreen="" loading="lazy"
             referrerpolicy="no-referrer-when-downgrade">

             </iframe>





    </>
  );
}
