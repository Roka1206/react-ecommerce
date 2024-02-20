// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest
            text-2x1 uppercase sm:text-3xl"
            >
              Rshop
            </a>
            <p className="text-gray-600 dark:text-white lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              minus aspernatur cum ipsam officia amet maxime neque repudiandae
              adipisci reiciendis ducimus quibusdam, nisi accusamus dicta
              quisquam minima in hic illo.
            </p>
            <p className="text-gray-500 mt-4">Made with by ROKA</p>
            <a
              href="https://github.com/Roka1206/"
              target="_black"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our blog for more information.
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Link
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Link
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-8 px-4 col-span-4 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3">Addres</h1>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Sada, A Coruna</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <FaMobileAlt />
              <p>+34 655087321</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a href="">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="">
                <FaGithub className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
