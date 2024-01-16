import React from "react";

const Experience = () => {

  return (
    <div
      name='experience'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white'
      style={{ paddingTop: "30px" }}
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Experience
          </p>
          <p className='py-6'>Here are some of my experiences</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        <div
              className='shadow-md shadow-yellow-500 rounded-lg text-center p-2'
            >
              {/* <img
                src={src}
                alt={title}
                className='rounded-md duration-200 hover:scale-105 mb-2'
              /> */}
              <span className=' font-bold text-lg capitalize'>MAD Street Den</span>
              <div className='flex flex-col items-start justify-start p-2'>
                <div style={{ marginBottom: '5px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <span className="font-bold"> Designation - </span> Software Engineer </div>
                <div className="text-gray-500 py-4 max-w-md"> Created features that have consistently resulted in bug-free product delivery. working with the team, taking part in code reviews, and assisting in the resolution of challenging issues. </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;