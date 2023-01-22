import React from "react";
import Image from "next/image";
import ContactUsVideoGif from "../public/assets/ContactUsVideoGif.gif";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-red-900 font-bold">
          Contact Me
        </h2>
        <br />

        {/* 1:39:00 */}
        {/* bg-slate-700 */}
        <div className=" flex flex-col md:flex-row gab-8 shadow-xl shadow-red-500 mt-4 bg-[#0f172a] text-white">
          <div className="w-full md:w-1/2 h-full rounded-full ml-6">
            <br />
            <br />
            <Image
              src={ContactUsVideoGif}
              alt="Contact me"
              className="rounded-xl ease-in cursor-pointer  hover:shadow-red-700 shadow-md"
            ></Image>
            <p className="pt-4 pb-8 w-3/5 ">
              I am always open to new opportunities and collaborations. If you
              are interested in job opportunities, business ideas, or working
              together on a project, please don't hesitate to reach out to me. I
              would love to hear from you.
            </p>
            <div className="grid grid-cols-2 max-auto w-1/3 gap-5">
              <div className="w-16 flex items-center justify-center rounded-full shadow-md shadow-teal-300 cursor-pointer hover:scale-105 text-blue-900  bg-white">
                <FaLinkedin size={40}></FaLinkedin>
              </div>
              <div className="w-16 flex items-center justify-center rounded-full shadow-md  shadow-teal-300 cursor-pointer hover:scale-105 text-blue-700  bg-white">
                <FaFacebook size={40}></FaFacebook>
              </div>
              <div className="w-16 flex items-center justify-center rounded-full shadow-md  shadow-teal-300 cursor-pointer hover:scale-105 text-black  bg-white">
                <FaGithub size={40}></FaGithub>
              </div>
              <div className="w-16 flex items-center justify-center rounded-full shadow-md   shadow-teal-300  cursor-pointer hover:scale-105 text-blue-600  bg-white">
                <FaTwitter size={40}></FaTwitter>
              </div>
            </div>
          </div>

          {/* Form {1:45:00} */}
          <div className="w-full md:w-1/2 h-full rounded-full  text-white">
            <div className=" p-4 text-left">
              <form
                action="https://getform.io/f/ceff76d9-daa5-4e1e-9307-b31a16cec303"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className=" capitalize text-sm py-2 font-light">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-dashed border-x-gray-700 border-y-red-800"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className=" capitalize text-sm py-2  font-light ">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-dashed border-x-gray-700 border-y-red-800 "
                    ></input>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className=" capitalize text-sm py-2  font-light">
                      Email
                    </label>
                    <input
                      type="email"
                      required={true}
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-dashed border-x-gray-700 border-y-red-800"
                    ></input>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className=" capitalize text-sm py-2  font-light">
                      Message
                    </label>
                    <textarea
                      type="textarea"
                      name="message"
                      cols={30}
                      rows={10}
                      className="border-2 rounded-lg p-3 flex focus:outline-dashed border-x-gray-700 border-y-red-800 h-full"
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className=" flex items-center justify-center gap-4">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit
                  </button>
                  <button
                    class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
