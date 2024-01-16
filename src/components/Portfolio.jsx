import React from "react";
import fashinQ from "../assets/portfolio/fashionQ.png";
import ors from "../assets/portfolio/ors.png";
import vidco from '../assets/portfolio/vidco.png';
import playCanvas from "../assets/portfolio/play-canvas.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fashinQ,
      title: "fashionQ",
      demo: "https://fashionq.onrender.com/",
      code: "https://github.com/harsh-dev-066/fashionQ",
    },
    {
      id: 2,
      src: vidco,
      title: "Vidco",
      demo: "https://devfolio.co/projects/vidco",
      code: "https://github.com/harsh-dev-066/knownsense",
    },
    {
      id: 3,
      src: ors,
      title: "ORS Portal",
      demo: "https://ors-portal.onrender.com/",
      code: "https://github.com/harsh-dev-066/ORS-Portal",
    },
	{
		id: 4,
		src: playCanvas,
		title: "Play Canvas",
		demo: "https://play-canvas.onrender.com/",
		code: "https://github.com/harsh-dev-066/play-canvas",
	  },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
	  style={{paddingBottom: '30px'}}
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my projects right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, title, demo, code }) => (
            <div
              key={id}
              className='shadow-md shadow-gray-600 rounded-lg text-center'
            >
              <img
                src={src}
                alt={title}
                className='rounded-md duration-200 hover:scale-105 mb-2'
              />
              <span className=' font-bold text-lg '>{title}</span>
              <div className='flex items-center justify-center'>
                <a
                  href={demo}
                  target='_blank'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target='_blank'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;