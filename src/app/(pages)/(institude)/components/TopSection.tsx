import Image from "next/image";
import { FaDownload, FaRegCheckCircle } from "react-icons/fa"; // Importing icons
import frontImg from "@/assets/images/institude-images/institude-front-img.png"; // Adjust path as needed
import Link from "next/link";

export default function TopSection() {
  return (
    <section className="  relative bg-white text-black overflow-hidden">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className="container mx-auto  py-0 md:py-16 relative ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Company Info */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-[Proxima]">
              Future Belongs To
              <br />
              Those Who{" "}
              <span className="bg-[#1F419B] inline-block text-transparent bg-clip-text font-[Proxima]">
                Learn
              </span>
              <br />
              <span className="bg-[#1F419B] inline-block text-transparent bg-clip-text text-7xl font-[Proxima] font-extrabold">
                Tech Today
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
            Become a fullstack web developer at DigiSukool  
            <br />
            And Earn  6 Figure Salary in a month.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/brochure.pdf"
                className="border-2 border-black font-semibold px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#1F419B] hover:text-white transition duration-300 text-center"
                download
              >
                <span>Download Brochure</span>
                <FaDownload />
              </a>

              <Link
                href="#"
                className="bg-secondaryColor text-black font-semibold px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-100 transition duration-300 text-center"
              >
                <span>Apply Now!</span>
                <FaRegCheckCircle />
              </Link>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="w-full md:w-1/2 md:pl-12">
            {/* Right Side Image */}
            <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <Image
                src={frontImg}
                alt="Mobile App Development"
                width={700}
                className="w-full" // Makes image responsive
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
