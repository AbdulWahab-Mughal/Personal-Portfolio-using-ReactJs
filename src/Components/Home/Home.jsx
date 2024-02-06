import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./Home.scss";
import Profile from "../../assets/Images/boy.png";
import Resume from "../../assets/Images/CanvaAWZ.pdf";
import { GlobalVarContext } from "../Context/GlobalVar";

const Home = () => {
  let { isToggle } = useContext(GlobalVarContext);
  const navigate = useNavigate();
  const handleClickToContact = () => {
    navigate("/contact");
  };
  return (
    <section id="homePage" className={`homePage ${isToggle ? "active" : ""}`}>
      <div className="left">
        <div className={`homePage_text`}>
          <TypeAnimation
            // style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
            sequence={[
              `Hello,\nI'm Abdul Wahab ,\n I'm a  Front End Developer`,
              2000,
              `Hello,\nI'm Abdul Wahab ,\n I'm a  Front End Developer..`,
              2000,
              // `I'm\n A  Passionate \n Web-Developer....`,
              // 2000,
            ]}
            wrapper="span"
            speed={30}
            style={{
              width:"100%",
              whiteSpace: "pre-line",
              display: "block",
              fontSize: "4vw",
              fontFamily: "revert-layer",
              fontWeight: "600",
              color: "rgb(17, 118, 207)",
              lineHeight: "7vh",
            }}
            repeat={Infinity}
          />
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="Btn">
            <div className="btn_contact">
              <button onClick={handleClickToContact}>Hire Me</button>
            </div>
            <div className="btn_resume">
              <a href={Resume} download={Resume}>
                <button>Download CV</button>
              </a>
            </div>
          </div>
          <div className="icons">
            <div className="fb">
              <a href="https://www.facebook.com/abdulwahab.zameer.1" target="_blank"><FaFacebook size={28} color=" rgb(17, 118, 207)"/></a>
            </div>
            <div className="git">
              <a href="https://github.com/AbdulWahab-Mughal" target="_blank"><FaGithub size={28} color=" rgb(17, 118, 207)"/></a>
            </div>
          </div>
        </Animate>
      </div>
      <div className="right">
        <Animate
          play
          duration={1.5}
          delay={0.3}
          start={{
            transform: "translateX(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <img src={Profile} alt="Portfolio Icon" />
        </Animate>
      </div>
    </section>
  );
};

export default Home;
