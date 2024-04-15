import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a Software Engineer and an avid coder, I have created features that
          have consistently resulted in bug-free product delivery. working with
          the team, taking part in code reviews, and assisting in the resolution
          of challenging issues. I have always gone out of my comfort zone to
          get a job done, pressure has always been an integral part of my
          journey as I constantly update my tech stack and keep up with new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
