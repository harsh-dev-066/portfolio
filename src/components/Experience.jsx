import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "MAD Street Den",
      description:
        "Created features that have consistently resulted in bug-free product delivery. working with the team, taking part in code reviews, and assisting in the resolution of challenging issues.",
      designation: "Software Engineer",
    },
    {
      id: 2,
      title: "Chattel Technolgies",
      description:
        "Full stack development for various projects of the company.",
      designation: "Web Developer Intern",
    },
    {
      id: 3,
      title: "ORS Portal",
      description:
        "Full stack development of an online B2B and B2C MERN stack app.",
      designation: "Web Developer Intern",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
      style={{ paddingTop: "30px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Here are some of my experiences</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="shadow-md shadow-yellow-500 rounded-lg text-center p-2"
            >
              <span className=" font-bold text-lg capitalize">{exp.title}</span>
              <div className="flex flex-col items-start justify-start p-2">
                <div
                  style={{
                    marginBottom: "5px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="font-bold mr-1"> Designation - </span>
                  {exp.designation}
                </div>
                <div className="text-gray-500 py-4 max-w-md">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
