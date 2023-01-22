import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import icon from "../public/assets/Icon.svg";
import { useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const NavBar = () => {
  const [navigation, setNavigation] = useState(false); //{37:40}
  const [pageScroll, setPageScroll] = useState(false); //{1:27:40} - how to make nab turn to dark color after scrolling and how to use useEffect

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "about me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed bg-[#ecf0f3]  text-[#be232f] font-bold duration-300 ease-in 
      ${pageScroll && "bg-black text-[#fff]"}`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          {/* <h1 className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider">Rami Zuhairi</h1> */}
          <div className="w-32">
            <Image src={icon} alt="Icon RZ"></Image>
          </div>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {
              //{28:00}
              links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider text-[#be232f]">
                    {link}
                  </li>
                </Link>
              ))
            }
          </ul>
          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30}></FaBars>
            </div>
          )}
        </div>
      </div>
      {/* 32:30 Mobile Menue*/}
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-gray-300 to-gray-600 text-[#be232f] p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                {/* <h2 className=' text-lg font-bold uppercase underline underline-offset-2 tracking-wider'>Ramixxx Zuhairi</h2> */}
                <div className="w-24">
                  <Image
                    src={icon}
                    onClick={() => setNavigation(false)}
                  ></Image>
                </div>
              </Link>
              <div
                className="p-3 cursor-pointer"
                onClick={() => setNavigation(false)}
              >
                <FaTimes size={30}></FaTimes>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col h-fit gab-20">
            {/* 41:30 Links list Menue - mobile*/}
            <ul className="uppercase">
              {
                //{42:00}
                links.map(({ id, link }) => (
                  <Link key={id} href={`/#${link}`}>
                    <li
                      onClick={() => setNavigation(false)}
                      className="py-4 list-none text-2xl cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider text-bold"
                    >
                      {link}
                    </li>
                  </Link>
                ))
              }
            </ul>
            <br />
            <div className="grid grid-cols-2 max-auto w-4/5 gap-10 ">
              <div className=" flex items-center justify-center rounded-full shadow-md shadow-slate-900 p-3 cursor-pointer hover:scale-105 text-blue-900">
                <FaLinkedin size={40}></FaLinkedin>
              </div>
              <div className=" flex items-center justify-center rounded-full shadow-md shadow-orange-700 p-3 cursor-pointer hover:scale-105 text-blue-700">
                <FaFacebook size={40}></FaFacebook>
              </div>
              <div className=" flex items-center justify-center rounded-full shadow-md shadow-orange-700 p-3 cursor-pointer hover:scale-105 text-black">
                <FaGithub size={40}></FaGithub>
              </div>
              <div className=" flex items-center justify-center rounded-full shadow-md  shadow-slate-900 p-3 cursor-pointer hover:scale-105 text-blue-600">
                <FaTwitter size={40}></FaTwitter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
