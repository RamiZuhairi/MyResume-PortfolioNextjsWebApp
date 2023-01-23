import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import installNode from "../../public/assets/portfolio/installNode.jpg";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import usestate from "../../public/assets/portfolio/usestate.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";

export const getStaticProps = async () => {
  const portfolios = [
    {
      id: 1,
      title: "React Weather App",
      imageSrc: reactWeather,
      url: "react-weather",
    },
    {
      id: 2,
      title: "Install Node",
      imageSrc: installNode,
      url: "install-node",
    },
    {
      id: 3,
      title: "Use State Explained",
      imageSrc: usestate,
      url: "use-state-hook",
    },
    {
      id: 4,
      title: "React Parallax Scroll",
      imageSrc: reactParallax,
      url: "react-parallax",
    },
  ];
  return {
    props: {
      portfolios,
    },
  };
};
const portfolioRoutes = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-red-900 font-bold pb-16">
          All Projects
        </h2>
        <p className="py-4 max-w-screen-lg ">
          As a Salesforce and React developer, I have recently worked on several
          projects that demonstrate my expertise in these technologies. One of
          my most notable projects was the development of a Salesforce Community
          page provider portal. This portal allowed users to view and edit their
          star rating history, providing a streamlined and efficient experience
          for providers. Another project I worked on was a file upload app,
          which allowed users to upload files to Salesforce to be processed and
          return results to the end user. I also implemented a star rating
          backend algorithm that automatically assigns ratings of 1-5 based on
          specific criteria, improving the accuracy and consistency of provider
          ratings. Lastly, I developed a quality indicator LWC that dynamically
          reads and converts data to HTML without the need for additional human
          development. These projects showcase my ability to combine my
          knowledge of Salesforce and React to create user-friendly and
          effective solutions for clients.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 ml-5">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className=" cursor-pointer group shadow-xl shadow-red-900 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105"
                ></Image>
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {/*{1:09:09}   */}
          <Link href="/#home">
            <div className="mr-auto group flex items-center justify-center my-8 bg-cyan-900 text-white px-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              <span className="rotate-90 duration-100 ease-in group-hover:-translate-x-2">
                <MdExpandMore size={25}></MdExpandMore>
              </span>
              Go back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default portfolioRoutes;
