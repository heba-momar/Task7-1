import "./HeroHome.css";
import { CiWavePulse1 } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function HeroHome({ h, title, Section }) {
  return (
    <header>

      {h && (
        <section>
          <div className="hm-hero-section">
            <div className="hm-hero-main-content">
              <div className="hm-hero-info">
                <div className="hm-hero-header">
                  <p>
                    <CiWavePulse1 className="MR-pulse-icon" /> Everything You
                    Need to Create a Website
                  </p>
                  <h2>Business Innovation with IT Services Expertise</h2>
                  <div className="hm-feature-list">
                    <ul>
                      <li>
                        <GiCheckMark /> Development and Support
                      </li>
                      <li>
                        <GiCheckMark /> Discovery and Analysis
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <GiCheckMark /> Flexibility and Adaptability
                      </li>
                      <li>
                        <GiCheckMark /> Competitive Advantage
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="hm-cta-button">
                      <span>GET STARTED ➔</span>
                    </button>
                  </div>
                </div>
                <div className="hm-reviews-container">
                  <div className="hm-review-card">
                    <h2 className="hm-review-title">
                      <FaStar className="hm-review-icon" /> Trustpilot
                    </h2>
                    <div className="hm-review-content">
                      <img
                        className="hm-review-image"
                        src="/image/profileShape1_1.webp"
                        alt="Profile"
                      />
                      <div>
                        <div className="hm-rating-stars">
                          <FaStar className="hm-rating-starsin"/>
                          <FaStar className="hm-rating-starsin"/>
                          <FaStar className="hm-rating-starsin"/>
                        </div>
                        <p>450+ reviews</p>
                      </div>
                    </div>
                  </div>

                  <div className=" hm-review-card">
                    <h2 className="MR-review-title">Google</h2>
                    <div className="hm-review-content">
                      <img
                        className="hm-review-image"
                        src="/image/profileShape1_1.webp"
                        alt="Profile"
                      />
                      <div>
                        <div className="hm-rating-stars">
                          <FaStar className="hm-rating-starsin"/>
                          <FaStar className="hm-rating-starsin"/>
                          <FaStar className="hm-rating-starsin" />
                        </div>
                        <p>450+ reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="hm-main-hero-image"
                  src="/image/heroThumb1_1.webp"
                  alt="Hero"  />

                <div>
                  <img  className="hm-decorative-shape1"
                    src="/image/heroShape1_1.webp"
                    alt="Shape 1"
                  
                  />
                  <img className="hm-decorative-shape2"
                    src="/image/heroShape1_2.webp"
                    alt="Shape 2"
                  />
          
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!h && (
        <section>
          <div className="hm-hero2-section">
            <div className="hm-overlay">
              <h2>{title}</h2>
              <p>
                <a href="#home">Home</a> &gt; <span>{Section}</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </header>
  );
}
