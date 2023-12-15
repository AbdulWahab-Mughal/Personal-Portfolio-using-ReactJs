import React, { useContext, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import ImageOne from "../../assets/Images/git.jpg";
import { GrProjects } from "react-icons/gr";
import ImageTwo from "../../assets/Images/pass.jpg";
import ImageThree from "../../assets/Images/weather.jpg";
import ImageFour from "../../assets/Images/Ecommerse.jpg";
import "./Portfolio.scss";
import { GlobalVarContext } from "../Context/GlobalVar";
const DataPortfolio = [
  {
    id: 2,
    Name: "GitHub Finder App",
    image: ImageOne,
    link: "https://github-finder-d64956.netlify.app/",
  },
  {
    id: 2,
    Name: "Password Generator",
    image: ImageTwo,
    link: "https://jade-longma-79beb7.netlify.app/",
  },
  {
    id: 3,
    Name: "Ecommerce Website",
    image: ImageFour,
    link: "https://fakeapistore-js.netlify.app/",
  },
  {
    id: 2,
    Name: "Weather App",
    image: ImageThree,
    link: "https://my-weather-app-rapidapi.netlify.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    Label: "All",
  },
  {
    filterId: 2,
    Label: "Apps",
  },
  {
    filterId: 3,
    Label: "Websites",
  },
];
const Portfolio = () => {
  let [isHover, setIsHover] = useState(null);
  let [isFiltered, setIsFiltered] = useState(1);
  let { isToggle } = useContext(GlobalVarContext);
  const filterHandler = (currentId) => {
    setIsFiltered(currentId);
  };

  const handleHover = (Index) => {
    setIsHover(Index);
  };

  const filteredItems =
    isFiltered === 1
      ? DataPortfolio
      : DataPortfolio.filter((item) => item.id === isFiltered);

  return (
    <>
      <section
        className={`portfolio ${isToggle ? "active" : ""}`}
        id="portfolio"
      >
        <SubHeader
          HeaderPage={"My Portfolio"}
          iconPage={<GrProjects size={40} />}
        />
        <div className="portfolio_content">
          <ul className="content_filter">
            {filterData.map((item, key) => (
              <li
                className={item.filterId === isFiltered ? "active" : ""}
                onClick={() => filterHandler(item.filterId)}
                key={key}
              >
                {item.Label}
              </li>
            ))}
          </ul>
          <div className="content_cards">
            {filteredItems.map((itm, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                className="cards_items"
              >
                <div className="items_Images">
                  <a>
                    <img src={itm.image} alt={`${itm.Name} Image`} />
                  </a>
                </div>
                <div className="hoverBtn">
                  {index === isHover && (
                    <div>
                      <p>{itm.Name}</p>
                      <a href={itm.link} target="_blank">
                        <button>Let's Visit</button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
