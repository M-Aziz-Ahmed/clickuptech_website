import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

import iosImg from "@/assets/images/landing-page/apple.png";
import androidImg from "@/assets/images/landing-page/android.png";
import flutterImg from "@/assets/images/landing-page/flutter.png";
import ecommerceImg from "@/assets/images/landing-page/ecommerce.png";
import enterpriseImg from "@/assets/images/landing-page/enterprise.png";
import graphicImg from "@/assets/images/landing-page/graphic-design.png";
import customSoftware from "@/assets/images/landing-page/custom-software.png";
import socialMediaImg from "@/assets/images/landing-page/social-media.png";
import webDevelopment from "@/assets/images/landing-page/web-development.png";

export default function OurServicesCard() {
  return (
    <>
      <div className="mt-5 bg-[#E1DFFA] flex flex-col">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center text-5xl font-[Proxima] custom-tracking font-extrabold mb-5 mt-5"
        >
          Our <span className="text-[#3E5AFD]">Services</span>
        </motion.h2>

        {/* our services section */}
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 pb-4 ml-3 mr-3">
          {/* Service Cards */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#F5808B] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#FEF1F2] group-hover:bg-white transition-all duration-300 border-[1px] border-[#F5808B]">
                <Image
                  src={iosImg}
                  alt="androidImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* android section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#46D39A] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#E8FFF6] group-hover:bg-white transition-all duration-300 border-[1px] border-[#46D39A]">
                <Image
                  src={androidImg}
                  alt="androidImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Flutter section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#44D1FD] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#EAFAFF] group-hover:bg-white transition-all duration-100 border-[1px] border-[#44D1FD] ">
                <Image
                  src={flutterImg}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* web  section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#F4D978] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#FFF8E1] group-hover:bg-white transition-all duration-100 border-[1px] border-[#F4D978] ">
                <Image
                  src={webDevelopment}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise App Development section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#C6237F] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#FFF3FA] group-hover:bg-white transition-all duration-100 border-[1px] border-[#C6237F] ">
                <Image
                  src={enterpriseImg}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* custom software section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#4757E4] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#F2F3FE] group-hover:bg-white transition-all duration-100 border-[1px] border-[#4757E4] ">
                <Image
                  src={customSoftware}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* E commerce section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#F37228] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#FFEFE6] group-hover:bg-white transition-all duration-100 border-[1px] border-[#F37228] ">
                <Image
                  src={ecommerceImg}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Socail Marketing section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#47BB78] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#E5F8ED] group-hover:bg-white transition-all duration-100 border-[1px] border-[#47BB78] ">
                <Image
                  src={socialMediaImg}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* graphic Desining section */}

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#A64CF9] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#F3E6FF] group-hover:bg-white transition-all duration-100 border-[1px] border-[#A64CF9] ">
                <Image
                  src={graphicImg}
                  alt="flutterImg"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* new section */}
        </div>
      </div>
    </>
  );
}
