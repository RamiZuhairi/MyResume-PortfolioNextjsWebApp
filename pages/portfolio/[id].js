import React from "react";
import Image from "next/image";
import Link from "next/link";
import installNode from "../../public/assets/portfolio/installNode.jpg";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import usestate from "../../public/assets/portfolio/usestate.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";

// {2:08:00}
const portfolios = [
  {
    id: 1,
    title: "React Weather App",
    imageSrc: reactWeather,
    url: "react-weather",
    description:
      "The project was a weather application developed using React.js. The app allows users to search for current weather conditions and forecast information for any location around the world. The application makes use of a weather API to retrieve data, and the user interface was designed to be clean and user-friendly. A unique feature of the app is the ability for users to switch between Celsius and Fahrenheit, and also provides the option to view the weather information in a graphical format. The end result was a feature-rich weather application that provides accurate and reliable weather information to users.",
  },
  {
    id: 2,
    title: "Install Node",
    imageSrc: installNode,
    url: "install-node",
    description:
      "The project involved the development of a web-based application for managing inventory in a retail setting. Utilizing the latest technologies such as React and Node.js, the application provided real-time updates on stock levels, as well as the ability to track sales and generate reports. A key feature of the project was the integration with a barcode scanning system, allowing for efficient and accurate tracking of inventory. The end result was a highly functional and user-friendly application that greatly improved the efficiency of the retail operation.",
  },
  {
    id: 3,
    title: "Use State Explained",
    imageSrc: usestate,
    url: "use-state-hook",
    description:
      "The project was a state management tool developed using React.js and the Redux library. The tool was designed to provide a centralized location for storing and managing application state, making it easier for developers to manage and update the state across different components of the application. The tool also included features such as undo/redo functionality, and the ability to track changes to the state over time. The end result was a powerful and flexible state management solution that greatly improved the maintainability and scalability of the application.",
  },
  {
    id: 4,
    title: "React Parallax Scroll",
    imageSrc: reactParallax,
    url: "react-parallax",
    description:
      "The project was a redesign of a e-commerce website using React.js. The website was designed to be mobile-friendly and responsive, providing a seamless user experience across all devices. The website featured a powerful search functionality, and a dynamic filtering system that allows users to easily find the products they are looking for. The shopping cart and checkout process was also optimized for convenience, and the website featured a easy-to-use admin panel for managing products and orders. The end result was a modern, high-performing website that greatly improved the online sales of the business.",
  },
];

// {2:18:00} - now how to make the pages comes dynamic ith Next
const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}
// {2:20:00}
export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}
const OnePortfolio = ({ portfolio: { title, imageSrc, description } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl  max-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer hover:-translate-x-2 duration-150">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>
        <h1 className=" capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-red-900 tracking-wider">
          {title}
        </h1>
        <div className=" relative w-96 h-56 mx-auto overflow-hidden my-8 shadow-md shadow-red-900">
          <Image src={imageSrc} alt="asda"></Image>
        </div>
        <h2 className="text-left md:text-left my-4 text-2xl">Desctiption</h2>
        <p className="text-left ">{description}</p>
        <div className="flex items-center justify-center gap-10">
          <Link href="assets/Rami-Resume.pdf" download={false} target="_blank">
            <div className=" group flex items-center justify-center my-8 bg-cyan-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="-rotate-0 duration-100 ease-in group-hover:translate-x-2">
                <AiOutlineCaretRight
                  size={25}
                  className="ml-2"
                ></AiOutlineCaretRight>
              </span>
            </div>
          </Link>
          <Link href="https://github.com/RamiZuhairi">
            <div className="group flex items-center justify-center my-8 bg-cyan-900 hover:bg-cyan-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
