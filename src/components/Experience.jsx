import React from "react";
import js from "../assets/js.png";
import dart from "../assets/dart.png";
import flutter from "../assets/flutter.png";
import nest from "../assets/nest.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";
import ts from "../assets/ts.svg";
import node from "../assets/node.png";


const Experience = () => {
  const techs = [
    {
      id: 4,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: nest,
      title: "Nest JS",
      style: 'shadow-red-500',
    },
    {
      id: 1,
      src: node,
      title: "Node js",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: dart,
      title: "Dart",
      style: "shadow-blue-500",
    },

    {
      id: 2,
      src: js,
      title: "Js",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: ts,
      title: "TypeScript",
      style: "shadow-blue-400",
    },

    {
      id: 7,
      src: mysql,
      title: "My SQL",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

  ];

  return (
    <div
      name="experience"
      className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900 via-black to-neutral-900 w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
