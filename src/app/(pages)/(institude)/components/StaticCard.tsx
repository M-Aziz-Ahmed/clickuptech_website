import React from "react";
import { MdOutlinePieChartOutline, MdOutlinePropane } from "react-icons/md";

export default function ServicesCard() {
  return (
    <>
     <div className="mt-5 bg-[#E1DFFA] flex flex-col ">
        {/* heading */}
         <h2 className="text-center text-3xl font-[Proxima] custom-tracking font-bold text-[#4C863A] mb-5 mt-5">
          Services We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 ml-3 mr-3">
          <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
              <div className="inline-flex align-middle justify-center items-center select-none text-[#4C863A]">
                <MdOutlinePieChartOutline style={{}} />
              </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black">
              For Developers
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black-300">
              Prototype ideas online, without depending on your local
              environment.
            </p>
          </div>

          <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
              <div className="inline-flex align-middle justify-center items-center select-none text-[#4C863A]">
                <MdOutlinePropane style={{ fontSize: 32 }} />
              </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black">
              Content creators
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black-300">
              Deliver high-quality, engaging blogs, articles, and video
              tutorials to your audience.
            </p>
          </div>

          {/* Add more blocks similarly with different icons as needed */}

          <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
              <div className="inline-flex align-middle justify-center items-center select-none text-black">
                <MdOutlinePropane style={{ fontSize: 32 }} />
              </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black">
              Content creators
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black-300">
              Deliver high-quality, engaging blogs, articles, and video
              tutorials to your audience.
            </p>
          </div>

          {/* Add more blocks similarly with different icons as needed */}

          <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
              <div className="inline-flex align-middle justify-center items-center select-none text-black">
                <MdOutlinePropane style={{ fontSize: 32 }} />
              </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black">
              Content creators
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black-300">
              Deliver high-quality, engaging blogs, articles, and video
              tutorials to your audience.
            </p>
          </div>

          {/* Add more blocks similarly with different icons as needed */}
        </div>
      </div>
    </>
  );
}
