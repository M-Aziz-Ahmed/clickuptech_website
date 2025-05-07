import Image from "next/image";
import appImage from "@/assets/images/landing-page/home-front-img.png"; // Update with your actual image path
import Link from "next/link";

export default function HomeFrontTopSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-between md:p-2  ">
        {/* Left Side Text */}
        
        <div className="flex flex-col max-w-md p-2 mt-0 items-center ml-20">
          <h1 className="font-bold text-3xl md:text-3xl mb-2 font-[Proxima] custom-tracking text-white">
            Get In Touch With{" "}
            <span className="bg-gradient-to-r from-[#5EE616] to-[#209B72] inline-block text-transparent bg-clip-text">
              Clickuptech
            </span>{" "}
          </h1>

          {/* Icons and Information */}
          <div className="space-y-4 mt-4 text-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            {/* 1st Icon Item */}
            <div className="flex items-start space-x-4">
              <div className="text-[#54B23D]">
                <i className="icon-placeholder">🌟</i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">50+ Projects Delivered</h3>
                <p className="text-sm text-gray-500">
                  Let us also navigate you through your digital journey for
                  successful delivery & implementation.
                </p>
              </div>
            </div>

            {/* 2nd Icon Item */}
            <div className="flex items-start space-x-4">
              <div className="text-[#54B23D]">
                <i className="icon-placeholder">🔄</i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">97% Repeat Business</h3>
                <p className="text-sm text-gray-500">
                  We not only deliver projects successfully but also value
                  relationships. With Link focus on repeat business and long-term
                  relationships with our clients and partners, we drive
                  innovation.
                </p>
              </div>
            </div>

            {/* 3rd Icon Item */}
            <div className="flex items-start space-x-4">
              <div className="text-[#54B23D]">
                <i className="icon-placeholder">🌍</i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  15 Countries (Client Location)
                </h3>
                <p className="text-sm text-gray-500">
                  With our development center in Pakistan and Germany, we
                  provide services to our clients spread across the globe in 15
                  countries.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-row space-y-4 md:space-y-0 md:space-x-10 mt-6 md:mt-10 self-center md:self-end ml-auto w-full md:w-auto">
            {/* Get In Touch Button */}
            <div className="border border-secondaryColor p-1 w-full md:w-40 h-12 mx-auto rounded-full flex items-center justify-between">
              <span className="font-[proxima] font-bold text-sm md:text-base text-secondaryColor ml-3">
                Get In Touch
              </span>
              <Link
                href="/"
                className="w-8 h-8 rounded-full flex justify-center items-center bg-secondaryColor"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                    stroke="black"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Hire Our Developers Button */}
            <Link
              href="javascript:;"
              className="w-full md:w-auto inline-flex items-center justify-center py-2 md:py-3 px-3 md:px-4 text-sm md:text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
            >
              Hire Our Developers
              <svg
                className="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="flex-shrink-0 w-full md:w-auto  mr-10">
          <Image
            src={appImage}
            alt="Mobile App Development"
            width={500}
            className="w-full h-auto" // Makes image responsive
          />
        </div>
      </div>
    </>
  );
}
