import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-red-950">Mutlu</h1>
          <h1 className="py-2 text-white">A Front-End Web Developer</h1>
          <p className="py-4 text-white sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
            <FaLinkedinIn/>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
            <FaGithub/>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
            <AiOutlineMail/>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
            <BsFillPersonLinesFill/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
