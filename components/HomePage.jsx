import React from "react";
import Rami from "../public/assets/Rami.jpeg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const HomePage = () => {
  return (
    // {50:00}
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-72 h-72 overflow-hidden rounded-full">
          <Image src={Rami} alt="Rami Zuhairi"></Image>
        </div>
        <h1 className=" uppercase font-bold text-gray-700 text-7xl">
          Full Stuck Developer
        </h1>
        <p className=" text-gray-700 text-xl max-w-sm mx-auto">
          {" "}
          As a Salesforce full stack developer with 2.5 years of experience, I
          bring a unique set of skills to the table. With an additional 3 years
          of experience in PowerShell, Splunk, and .NET, I am able to offer a
          well-rounded approach to problem-solving. With a total of 5 years of
          experience in the IT industry, I am confident in my ability to make an
          immediate impact on any team.
        </p>
        <br />
        {/* <div className='grid grid-cols-4 max-auto  gap-10 '>
                  <div className=' flex items-center justify-center rounded-full shadow-md shadow-slate-900 p-3 cursor-pointer hover:scale-105 text-blue-900'>
                    <FaLinkedin size={40} ></FaLinkedin>
                  </div>
                  <div className=' flex items-center justify-center rounded-full shadow-md shadow-orange-700 p-3 cursor-pointer hover:scale-105 text-blue-700'>
                    <FaFacebook size={40} ></FaFacebook>
                  </div>
                  <div className=' flex items-center justify-center rounded-full shadow-md shadow-orange-700 p-3 cursor-pointer hover:scale-105 text-black'>
                    <FaGithub size={40} ></FaGithub>
                  </div>
                  <div className=' flex items-center justify-center rounded-full shadow-md  shadow-slate-900 p-3 cursor-pointer hover:scale-105 text-blue-600'>
                    <FaTwitter size={40} ></FaTwitter>
                  </div>
                  
                  
                </div> */}
        {/* // {54:00} */}

        <Link href="/#portfolio">
          <div className=" group flex items-center justify-center my-8 bg-cyan-900 text-white px-3 font-bold uppercase rounded-md tracking-wider">
            Know More
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25}></MdExpandMore>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
