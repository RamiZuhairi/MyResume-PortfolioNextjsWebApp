import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import css from "../public/assets/experience/css.png";
import GitHub from "../public/assets/experience/GitHub.png";
import powershell from "../public/assets/experience/powershell.png";
import html from "../public/assets/experience/html.png";
import javaScript from "../public/assets/experience/javaScript.png";
import nextjs from "../public/assets/experience/nextjs.png";
import node from "../public/assets/experience/node.png";
import react from "../public/assets/experience/react.png";
import tailwind from "../public/assets/experience/tailwind.png";
import apexTestClass from "../public/assets/experience/ApexTestClass.png";
import salesforcelwc from "../public/assets/experience/salesforce-lwc.jpeg";
import salesforceCodex_Apex from "../public/assets/experience/SalesforceCodex_Apex.png";
import lwc from "../public/assets/experience/LWC.png";
import dotNet from "../public/assets/experience/dotNet.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "node",
      imageSrc: node,
    },
    {
      id: 2,
      title: "react",
      imageSrc: react,
    },
    {
      id: 3,
      title: "css",
      imageSrc: css,
    },
    {
      id: 4,
      title: "html",
      imageSrc: html,
    },
    {
      id: 5,
      title: "javaScript",
      imageSrc: javaScript,
    },
    {
      id: 6,
      title: "nextjs",
      imageSrc: nextjs,
    },
    {
      id: 7,
      title: "powershell",
      imageSrc: powershell,
    },
    {
      id: 8,
      title: "GitHub",
      imageSrc: GitHub,
    },
    {
      id: 9,
      title: "tailwind",
      imageSrc: tailwind,
    },
    {
      id: 10,
      title: "apexTestClass",
      imageSrc: apexTestClass,
    },
    {
      id: 11,
      title: "salesforcelwc",
      imageSrc: salesforcelwc,
    },
    {
      id: 12,
      title: "Salesforce Code Apex",
      imageSrc: salesforceCodex_Apex,
    },
    {
      id: 13,
      title: "lwc",
      imageSrc: lwc,
    },
    {
      id: 14,
      title: "dotNet",
      imageSrc: dotNet,
    },
  ];
  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24  px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-red-900 font-bold">
          experience
        </h2>
        <p className="py-4 max-w-screen-lg ">
          I have 2.5 years of experience in full stack development, with a focus
          on HTML, CSS, Tailwind, React.js, Next.js and Salesforce Apex
          development and Lightning Web Components. I have been working in the
          IT industry for 6 years, and I have experience with PowerShell as
          well. My experience in these technologies has allowed me to design and
          develop web applications that are both visually appealing and highly
          functional. Additionally, my experience with Salesforce has allowed me
          to work on the development of custom solutions for enterprise clients
          that meet their specific needs. Overall, I am confident in my ability
          to deliver high-quality, reliable solutions for any project.
        </p>

        <div className=" grid lg:grid-cols-8 md:grid-cols-6 sm: grid-cols-2 gap-3">
          {experiences.map(({ id, title, imageSrc }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center 
                         justify-between shadow-xl rounded-xl hover:scale-105 ease-in 
                         duration-300 bg-slate-900 text-white shadow-red-900 lg:text-center"
            >
              <Image
                src={imageSrc}
                alt={title}
                width="64px"
                height="64px"
              ></Image>
              <h3 className="font-light ">{title}</h3>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {/*{1:09:09}   */}
          <div className=" group flex items-center justify-center my-8 bg-cyan-900 text-white px-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            all Experinces
            <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-2">
              <MdExpandMore size={25}></MdExpandMore>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
