import Image from "next/image";
import { FaDownload, FaRegCheckCircle } from "react-icons/fa"; // Importing icons
import frontImg from "@/assets/images/institude-images/institude-front-img.png"; // Adjust path as needed
import Link from "next/link";

export default function TopSection() {
  return (
    <section className="  relative bg-gradient-to-br from-[#06044A] to-[#3403B8] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="container mx-auto  py-12 md:py-16 relative ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Company Info */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-[Proxima]">
              Future Belongs To
              <br />
              Those Who{" "}
              <span className="bg-gradient-to-r from-[#5EE616] to-[#209B72] inline-block text-transparent bg-clip-text font-[Proxima]">
                Learn
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5EE616] to-[#209B72] inline-block text-transparent bg-clip-text text-7xl font-[Proxima] font-extrabold">
                Tech Today
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
            Become a fullstack web developer at DigiSukool  
            <br />
            And Earn  6 Figure Salary in a month.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-900 transition duration-300 text-center"
              >
                <span>Download Brochure</span>
                <FaDownload />
              </Link>

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
