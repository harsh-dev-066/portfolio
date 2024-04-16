import React from "react";
import portrait from "../assets/profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="profile w-full lg:h-screen min-h-fit bg-gradient-to-b from-black via-black to-gray-800"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl  md:text-5xl lg:text-7xl font-bold text-white">
            I'm a Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a Software Engineer and an avid coder, I have created features
            that have consistently resulted in bug-free product delivery.
            working with the team, taking part in code reviews, and assisting in
            the resolution of challenging issues.
            <br />
            <br />I have always gone out of my comfort zone to get a job done,
            pressure has always been an integral part of my journey as I
            constantly update my tech stack and keep up with new technologies.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="profile-image">
          <img
            src={portrait}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
