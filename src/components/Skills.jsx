import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";
import mongodb from "../assets/mongodb.png";
import postgresql from "../assets/postgresql.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";
import prisma from "../assets/prisma.png";
import docker from "../assets/docker.png";
// import mysql from '../assets/mysql.png'
// import websocket from '../assets/websocket.png'

const Skills = () => {
  const techs = [
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 22,
      src: nextjs,
      title: "Next.js",
      style: "shadow-slate-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 1,
      src: html,
      title: "HTML 5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS 3",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: sass,
      title: "Sass",
      style: "shadow-pink-600",
    },
    {
      id: 12,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 11,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-600",
    },

    {
      id: 9,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 15,
      src: prisma,
      title: "Prisma ORM",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-8"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="skill-list w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="h-20   flex justify-center items-center">
                <img src={src} alt="" className="w-20 mx-auto" />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
