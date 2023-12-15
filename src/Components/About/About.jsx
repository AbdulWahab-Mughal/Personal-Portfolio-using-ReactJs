import React, { useContext } from "react";
import SubHeader from "../SubHeader/SubHeader";
import {BsAndroid2 } from "react-icons/bs";
import { TbBrandNodejs,TbBrandVscode } from "react-icons/tb";
import { FaDatabase , FaBlackTie } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./About.scss";
import { GlobalVarContext } from "../Context/GlobalVar";

const PersonalDetails = [
  {
    label: "Name:",
    value: "AbdulWahab Zamir",
  },
  {
    label: "Age:",
    value: "21",
  },
  {
    label: "DOB:",
    value: "04-03-2002",
  },
  {
    label: "Phone:",
    value: "0333-3320695",
  },
  {
    label: "Email:",
    value: "wahaba374@gmail.com",
  },
  {
    label: "Address:",
    value: "Karachi, Pakistan💙",
  },
];
const About = () => {
  let {isToggle} = useContext(GlobalVarContext)
  return (
    <>
      <section id="about" className={`about ${isToggle? "active":""}`}>
        <SubHeader
          HeaderPage={"About Me"}
          iconPage={<FaBlackTie size={40} />}
        />
        <div className="about_content">
          <div className="leftSection">
            <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{
                transform: "translateX(-900px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3>Front End Developer</h3>
              <p>
              Hello there! 👋 I'm Abdul Wahab, a budding front-end developer with a passion for creating captivating and user-friendly web experiences. Although my journey in the web development world is just beginning, my enthusiasm for crafting pixel-perfect, responsive designs knows no bounds.
              </p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{
                transform: "translateX(500px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="PersonalInfo">Personal Information</h3>
              <ul>
                {PersonalDetails.map((items, key) => {
                  return (
                    <li key={key}>
                      <span className="title">{items.label}</span>
                      <span className="value">{items.value}</span>
                    </li>
                  );
                })}
              </ul>
            </Animate>
          </div>
          <div className="rightSection">
          <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{
                transform: "translateX(600px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
            <div className="rightContainer">
              <div>
                <TbBrandNodejs size={60} color=" rgb(17, 118, 207)"/>
              </div>
              <div>
                <BsAndroid2 size={60} color=" rgb(17, 118, 207)"/>
              </div>
              <div>
                <TbBrandVscode size={60} color=" rgb(17, 118, 207)"/>
              </div>
              <div>
                <FaDatabase size={60} color=" rgb(17, 118, 207)"/>
              </div>
              
            </div>
            </Animate>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
