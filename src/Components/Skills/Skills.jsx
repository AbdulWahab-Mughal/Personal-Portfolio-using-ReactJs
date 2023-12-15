import React, { useContext } from "react";
import "./Skills.scss";
import SubHeader from "../SubHeader/SubHeader";
import { GiSkills } from "react-icons/gi";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import { GlobalVarContext } from "../Context/GlobalVar";

const SkillsData = [
  {
    label: "Front End",
    data: [
      {
        skillName: "HTML & CSS",
        percentage: "90",
      },

      {
        skillName: "JavaScript",
        percentage: "75",
      },
      {
        skillName: "ReactJs",
        percentage: "70",
      },
      {
        skillName: "TailWind & Bootstrap",
        percentage: "70",
      },
    ],
  },
  {
    label: "Back End",
    data: [
      {
        skillName: "NodeJs",
        percentage: "50",
      },
      {
        skillName: "ExpressJs",
        percentage: "75",
      },
      {
        skillName: "FireBase",
        percentage: "60",
      },
      {
        skillName: "Netlify",
        percentage: "50",
      },
    ],
  },
  {
    label: "Data Base",
    data: [
      {
        skillName: "MongoDB",
        percentage: "60",
      },

      {
        skillName: "FireBase",
        percentage: "60",
      },
    ],
  },
];
const Skills = () => {
  let { isToggle } = useContext(GlobalVarContext);
  return (
    <>
      <section className={`skills ${isToggle ? "active" : ""}`} id="skills">
        <SubHeader
          HeaderPage={"My Skills"}
          iconPage={<GiSkills size={40} />}
        />
        <div className="skills_content">
          {SkillsData.map((item, key) => (
            <div key={key} className="innerContent">
              <Animate
                play
                duration={2}
                delay={0.3}
                start={{
                  transform: "translateX(-400px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="Inner_Text_1">{item.label}</h3>
                <div className="skillsitems">
                  {item.data.map((skillsitems, skillKey) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1", "opacity:0"]}
                      iterationCount="1"
                    >
                      <div className="progressBar" key={skillKey}>
                        <p>{skillsitems.skillName}</p>
                        <Line
                        className="LinePer"
                          percent={skillsitems.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth={"2"}
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
