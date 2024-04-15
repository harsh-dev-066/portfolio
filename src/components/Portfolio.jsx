import React from "react";
import fashinQ from "../assets/portfolio/fashionQ.png";
import ors from "../assets/portfolio/ors.png";
import vidco from "../assets/portfolio/vidco.png";
import playCanvas from "../assets/portfolio/play-canvas.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fashinQ,
      title: "fashionQ",
      demo: "https://fashionq.onrender.com/",
      code: "https://github.com/harsh-dev-066/fashionQ",
      desc: "E-commerce web app for fashion trends.",
    },
    {
      id: 2,
      src: vidco,
      title: "Vidco",
      demo: "https://devfolio.co/projects/vidco",
      code: "https://github.com/harsh-dev-066/knownsense",
      desc: "An end to end chat application for healthcare professionals.",
    },
    {
      id: 3,
      src: ors,
      title: "ORS Portal",
      demo: "https://ors-portal.onrender.com/",
      code: "https://github.com/harsh-dev-066/ORS-Portal",
      desc: "Platform connecting service seekers & providers.",
    },
    {
      id: 4,
      src: playCanvas,
      title: "Play Canvas",
      demo: "https://play-canvas.onrender.com/",
      code: "https://github.com/harsh-dev-066/play-canvas",
      desc: "- Interactive visualization app (React-Konva).",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      style={{ paddingBottom: "30px" }}
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, demo, code, desc }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg text-center"
            >
              <a href={demo} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105 mb-2 cursor-pointer"
                  href={demo}
                  target="_blank"
                  height="auto"
                />
              </a>
              <a href={code} target="_blank" rel="noreferrer">
                <div className=" cursor-pointer font-bold text-lg ">
                  <span>{title}</span> <span> {"</>"} </span>{" "}
                </div>
              </a>
              <div className="text-gray-500 py-4 max-w-md">{desc}</div>
              {/* <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
