"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes, FaPhone,FaFacebook,FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import logo from "@/assets/images/logo.png";
import "@/css/globals.css";
import Model from "./Model";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};


const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  {
    label: "Courses",
    link: "/courses",
    children: [
      { label: "Web Development", link: "/services/web-development" },
      { label: "Mobile Development", link: "/services/mob-development" },
      { label: "ERP Solutions", link: "#" },
      { label: "Digital Marketing", link: "#" },
      { label: "Custom Software Developemt", link: "#" },
      { label: "E-Commerce", link: "#" },
      { label: "Graphic Designing", link: "#" },
    ],
  },
  {
    label: "More",
    link: "#",
    children: [
      { label: "Web Developer", link: "#" },
      { label: "Mobile Developer", link: "#" },
      { label: "Data Scientist", link: "#" },
    ],
  },
  { label: "FAQS", link: "/faq" },
  // { label: "Blog", link: "#" },
];

export default function InstitudeHeader() {
  const [model, setModel] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="font-[Proxima] header fixed shadow-sm m-2 rounded tracking-wide top-0 text-lg bg-gradient-to-t from-[#1F419B] to-[#1F419B]">
      <div className="hidden lg:flex px-[12vw] justify-between items-center text-white bg-slate-800">
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2 text-white text-lg">
            <FaPhone />
            <span className="text-sm lg:text-base font-semibold">
              +92 337 777 5930
            </span>
          </div>

          <div className="flex items-center gap-2 text-white text-lg">
            <SiMinutemailer />
            <span className="text-sm lg:text-base font-semibold">
              info@digisukool.com
            </span>
          </div>

        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
              <FaFacebook/>
              <FaInstagram/>
              <FaLinkedin/>
          </div>
          <div className="btn btn-success rounded-0">Hire From Us</div>
          <div className="btn btn-danger rounded-0">Online Registration</div>
        </div>
      </div>
      <Model model={model} setModel={setModel} />
      <section className="flex items-center justify-between gap-4 py-3 px-4 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 ml-auto mr-10">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.link || "#"}
                  className="flex items-center text-white hover:text-[#5EE616]"
                >
                  {item.label}
                  {(item.label === "Courses" ||
                    item.label === "More") && (
                      <FaChevronDown className="ml-1 text-sm align-middle" />
                    )}
                </Link>

                {/* Submenu */}
                {item.children && (
                  <ul className="absolute top-[150%] left-1/2 -translate-x-1/2 w-78 bg-[#FFFFFF] shadow-lg rounded-lg p-2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.link || "#"}
                          className="block px-4 py-2 text-black hover:bg-primaryColor hover:text-secondaryColor rounded-lg whitespace-nowrap text-sm"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Register Button */}
          <Link
            href="/"
            className="font-bold text-white bg-gradient-to-r from-red-400 to-yellow-500 px-4 py-1 rounded-lg transition-all duration-300 hover:from-[#fe8c00] hover:to-[#f83600] hover:animate-none"
            onClick={() => setModel(true)}
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#49479F] p-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <Link
                  href={item.link || "#"}
                  className="flex items-center text-white hover:text-[#54B23D] active:text-secondaryColor"
                >
                  {item.label}
                  {(item.label === "Courses" || item.label === "More") && (
                    <FaChevronDown className="ml-1 text-sm" />
                  )}
                </Link>

                {/* Submenu */}
                {item.children && (
                  <ul className="absolute top-[80%] left-0 w-60 bg-white shadow-lg rounded-lg p-2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.link || "#"}
                          className="block text-sm text-white hover:text-[#54B23D] active:text-secondaryColor"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Institute Button for Mobile */}
          <Link
            href="/institute"
            className="text-white bg-[#88C273] px-4 py-2 mt-4 rounded-lg text-center hover:bg-[#6AA257] transition"
          >
            Institute
          </Link>


        </div>

      )}
    </header>
  );
}
