import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";
// import resume from "../public/assets/Rami-Resume.pdf";
const AboutMe = () => {
  return (
    <div id="about me" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 px-8 py-16 text-center md:text-left ">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-red-900 font-bold">
          About Me
        </h2>
        <br />
        <div className="shadow-xl shadow-red-500 my-8 px-8 bg-[#0f172a] text-white">
          <p className="py-4 max-w-2 mx-auto">
            I am a highly creative and imaginative person with a unique ability
            to imagine solutions for my clients before building them. As a full
            stack developer, I am able to bring my ideas to life through coding.
            My combination of creativity and technical abilities sets me apart.
            In my free time, I enjoy hiking every weekend and find that music,
            dance, yoga and meditation are great ways to relax and de-stress.
            They help me to maintain a balance between my professional and
            personal life.
          </p>
          <p className="py-4 max-w-2 mx-auto">
            The best part of a project for me is the proof of concept (POC)
            phase. This is where I get to dive deep into the solutions and come
            up with answers for the clients. I enjoy the challenge of thinking
            outside the box to provide the best solution possible. Additionally,
            deploying to production and seeing the build go live is extremely
            fulfilling. It brings a great sense of accomplishment and pride
            knowing that all the hard work has come to fruition. Sharing these
            happy moments with my team mates make it even more enjoyable.
          </p>
          <p className="py-4 max-w-2 mx-auto">
            Working in an Agile way using Azure DevOps and Jira ticketing
            systems has greatly helped me with organizing my work. Having all
            the tickets and stories written as tickets in these systems makes it
            easy for me as a developer to follow my work and for the testers to
            understand the requirements. It helps to have a clear and organized
            way of tracking progress and ensuring that all tasks are completed
            efficiently. These tools have made it much easier for me to stay on
            top of my work and collaborate with my team effectively.
          </p>
        </div>

        <br />
        {/*{1:32:09}   */}
        <div className="flex items-center justify-center gap-10">
          <Link href="assets/Rami-Resume.pdf" download={false} target="_blank">
            <div className=" group flex items-center justify-center my-8 bg-cyan-900 text-white px-3 font-bold uppercase rounded-md tracking-wider p-2">
              View Resume
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-2">
                <MdExpandMore size={25}></MdExpandMore>
              </span>
            </div>
          </Link>
          <Link href="/#contact">
            <div className=" group flex items-center justify-center my-8 bg-cyan-900 text-white px-3 font-bold uppercase rounded-md tracking-wider p-2 cursor-pointer">
              Contact me
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25}></MdExpandMore>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
