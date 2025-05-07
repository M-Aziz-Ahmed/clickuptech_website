"use client";
import * as motion from "framer-motion/client";

import {
  FaTrophy,
  FaGlobeAmericas,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa"; // Import icons
import AnimatedCounter from "./AnimatedCounter"; // Adjust the path as needed

const StatsSection = () => {
  return (
    <div className="bg-[#F1F9FF] w-full grid justify-center content-center py-10 ">
      {/* Main Heading and Description */}
      <div className="text-center py-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center text-5xl font-[Proxima] custom-tracking font-extrabold mb-5 mt-5"
        >
          Our <span className="text-secondaryColor">Achievement</span>
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          A glimpse into our progress and accomplishments over the years.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ml-10 mr-10 w-fit">
        {/* Card 1 */}
        <div className="rounded-[25px] bg-white p-8 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
          <FaTrophy className="h-10 w-10 text-blue-500" />
          <div className="my-2">
            <h2 className="text-4xl font-bold ">
              <AnimatedCounter from={0} to={7} duration={10} />+
            </h2>
          </div>
          <div>
            <p className="mt-2 font-sans text-base font-medium text-gray-500">
              Years of Operation
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-[25px] bg-white p-8 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
          <FaGlobeAmericas className="h-8 w-8 text-blue-500" />
          <div className="my-2">
            <h2 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={3} duration={10} />
            </h2>
          </div>
          <div>
            <p className="mt-2 font-sans text-base font-medium text-gray-500">
              Office Globally
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-[25px] bg-white p-8 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
          <FaUsers className="h-10 w-10 text-blue-500" />
          <div className="my-2">
            <h2 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={15} duration={10} />+
            </h2>
          </div>
          <div>
            <p className="mt-2 font-sans text-base font-medium text-gray-500">
              Countries Client Presence
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-[25px] bg-white p-8 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
          <FaProjectDiagram className="h-10 w-10 text-blue-500" />
          <div className="my-2">
            <h2 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={160} duration={10} />+
            </h2>
          </div>
          <div>
            <p className="mt-2 font-sans text-base font-medium text-gray-500">
              Projects Delivered
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-[25px] bg-white p-8 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
          <FaUsers className="h-10 w-10 text-blue-500" />
          <div className="my-2">
            <h2 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={97} duration={10} />%
            </h2>
          </div>
          <div>
            <p className="mt-2 font-sans text-base font-medium text-gray-500">
              Repeat Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
