"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";

import Typed from "typed.js";
import { CiLinkedin } from "react-icons/ci";
import { GrLinkedin } from "react-icons/gr";
import Services from "./component/Services";
import About from "./component/About";
import Wrapper from "./component/Wrapper";

import "./assets/css/tailwind.css";
import "./assets/scss/tailwind.scss";

import "./assets/scss/icons.scss";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Portfolio from "./component/Portfolio";
import Review from "./component/Testimonial";
import InstructorProfiles, { ProfileCard } from "./component/instructor";

function Home() {
  const [isOpen, setMenu] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    const typed = new Typed("#typed", {
      strings: [
        "<b>Business</b>",
        "<b>Startups</b>",
        "<b>Digital Agency</b>",
        "<b>Marketing</b>",
      ],
      backDelay: 2000,
      loop: true,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      typed.destroy(); // Cleanup the Typed instance
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <div>
          <nav className={`${scroll ? "is-sticky" : ""} navbar`} id="navbar">
            <div className="container flex flex-wrap items-center justify-end">
              <Link className="navbar-brand" href="index.html">
                <span className="inline-block dark:hidden">
                 
                 
                  <Image
                    src={"/images/logo-dark.png"}
                    className="l-dark"
                    alt=""
                    width="105"
                    height={24}
                  />
                  <Image
                    src={"/images/logo-light.png"}
                    className="l-light"
                    alt=""
                    width="105"
                    height={24}
                  />
                </span>
                <Image
                  src={"/images/logo-light.png"}
                  className="hidden dark:inline-block"
                  alt=""
                  height={24}
                  width="105"
                />
              </Link>

              <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                <ul className="list-none menu-social mb-0">
                  <li className="inline ms-1">
                    <a href="https://api.whatsapp.com/send/?phone=%2B919725056093&text=%20&app_absent=0
">
                      <span className="login-btn-primary">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                          <Unicons.UilWhatsapp />
                        </span>
                      </span>
                      <span className="login-btn-light">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                          <Unicons.UilWhatsapp />
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="inline ms-1">
                    <a href="https://www.linkedin.com/in/parth-institute?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <span className="login-btn-primary">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                          <GrLinkedin />
                        </span>
                      </span>
                      <span className="login-btn-light">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                          <GrLinkedin />
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="inline ms-1">
                    
                  
                  <a href="https://www.instagram.com/parth_institute_official?igsh=MXBzb3RzNGhhYXJobw==" >
                      <span className="login-btn-primary">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                          <Unicons.UilInstagram />
                        </span>
                      </span>
                      <span className="login-btn-light">
                        <span className="btn btn-sm btn-icon p-1.5 rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                          <Unicons.UilInstagram />
                        </span>
                      </span>
                      </a>
                   
                  </li>
                </ul>
                <button
                  type="button"
                  className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Navigation Menu</span>
                  <i className="mdi mdi-menu mdi-24px"></i>
                </button>
              </div>

              <div
                className={`${
                  isOpen ? "hidden" : "block"
                } navigation lg_992:order-1 lg_992:flex`}
                id="menu-collapse"
              >
                <ul className="navbar-nav nav-light" id="navbar-navlist">
                  <Link
                    className="nav-item"
                    to="home"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Home</span>
                  </Link>
                  <Link
                    className="nav-item"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="about"
                  >
                    <span className="nav-link">About us</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="features"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">programs</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="portfolio"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Media</span>
                  </Link>
                  {/* <Link
                    className="nav-item"
                    to="testi"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Review</span>
                  </Link> */}
                  {/* <Link
                    className="nav-item"
                    to="pricing"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Pricing</span>
                  </Link> */}
                  {/* <Link
                    className="nav-item"
                    to="blog"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Blog</span>
                  </Link> */}
                  <Link
                    className="nav-item"
                    to="contact"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Contact us</span>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
          <section
            style={{ backgroundImage: `url(/images/banner.png)` }}
            className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
            id="home"
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
              <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                  Providing Brilliant Ideas <br />
                  For Your{" "}
                  <span
                    className="typewrite relative text-type-element"
                    id="typed"
                    data-period="2000"
                    data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
                  ></span>
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered Tailwind CSS html
                  page.
                </p>

                <div className="relative mt-10">
                  <Link
                    
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                    to="contact"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                      Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* About section */}
          <About />

          {/* Service section */}
          <Services />

          {/* Portfolio section */}
          <Portfolio />

          <ProfileCard />
        
          <Contact />

          <Footer />

         
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
