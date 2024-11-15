import { IoLocation, IoLogoInstagram, IoMailOpenSharp } from "react-icons/io5";
import "./Footer.css";
import { FaFacebookF, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer({ m }) {
  return (
    <footer>
      <section>
        {m && (
          <div className="footer-header-1">
            <div className="footer-home-container">
              <div className="IT-image"></div>
              <div className="IT-shape"></div>
              <div className="IT-shape2"></div>
              <p>Stay Connected With Cutting Edge IT</p>
              <button>Talk To A Specialist ➔</button>
            </div>
          </div>
        )}

        {!m && (
          <div className="footer-information">
            <div className="Information-inside2">
              <FaPhone className="Information-icon2" />
              <div>
              <p>Call Us 9/24</p>
                <a href="tel:+951205166">+963951205166</a>
              </div>
            </div>
            <div className="footer-information-line"></div>

            <div className="Information-inside2">
              <IoMailOpenSharp className="Information-icon2" />
              <div>
                <p>Make A Quote</p>
                <a href="mailto:hebamomar851@gmail.com">
                 HebaMomar@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-information-line"></div>

            <div className="Information-inside2">
              <IoLocation className="Information-icon2" />
              <div>
                <p>Location</p>
                <a href="Location:Syria Aleppo Aleppo">
                  Syria Aleppo Aleppo
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="middle-footer-container">

          <div className="footer-brand">
            <img src="../../../public/image/logo2.svg" alt="logo" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              quaerat laudantium dicta. Aperiam repudiandae, dolore obcaecati
              laudantium
            </p>

            <div className="footer-social-links">
              <a href="https://www.facebook.com/heba.momar.37?mibextid=ZbWKwL">
                <FaFacebookF />
              </a>
              <a href="X">
                <FaTwitter />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/heba_momar/profilecard/?igsh=MWloOHI2M3c3eXF5MA==">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
          <div className="footer-quick-links">
            <h3>Quick Links</h3>
            <div className="footer-divider"></div>
            <ul>
              <li>
                <Link className="Link" to={"/About"}>
                  <MdOutlineKeyboardDoubleArrowRight /> Extech About{" "}
                </Link>
              </li>
              <li>
                <MdOutlineKeyboardDoubleArrowRight /> Our Services
              </li>
              <li>
                <MdOutlineKeyboardDoubleArrowRight /> Our Blogs
              </li>
              <li>
                <MdOutlineKeyboardDoubleArrowRight /> FAQs
              </li>
              <li>
                <Link className="Link" to={"/Contact"}>
                  <MdOutlineKeyboardDoubleArrowRight /> Contact Us{" "}
                </Link>
              </li>
            </ul>
          </div>

 
          <div className="footer-recent-posts">
            <h3>Recent Posts</h3>
            <div className="footer-divider"></div>
            <div className="recent-post">
              <div className="post-details">
                <img src="/image/footerThumb1_1.webp" alt="Post Thumbnail" />
                <div>
                  <span>
                    <SlCalender /> 15th April, 2024
                  </span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="post-details">
                <img src="/image/footerThumb1_2.webp" alt="Post Thumbnail" />
                <div>
                  <span>
                    <SlCalender /> 15th April, 2024
                  </span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="footer-divider"></div>
            <div className="contact-info">
              <IoMdMail />
              <a href="mailto:Mustafa.rashid.abbas@gmail.com">
                Mustafa.rashid.abbas@gmail.com
              </a>
            </div>
            <div className="contact-info">
              <FaPhoneFlip />
              <a href="tel:+9647716091119">+964 (771) 609 1119</a>
            </div>


            <div className="email-subscription">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
              />
              <button className="email-submit">➔</button>
            </div>


            <div className="privacy-policy">
              <input type="checkbox" id="agree" className="checkbox-input" />
              <label htmlFor="agree">
                I agree to the <a href="#">Privacy Policy</a>.
              </label>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="footer-legal-content">
            <div>©All Copyright 2024 by Extech</div>
            <div>
              <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
