import Image from "next/image";
import servicesbg from "@/assets/images/services-bg.jpeg";
import Link from "next/link";

export default function Services() {

  return (
    <>
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden mt-2">
          <div className="absolute inset-0">
            <Image
              src={servicesbg}
              alt="Background Image"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to Our Professional Services
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover amazing features and services that await you.
            </p>
            <Link
              href="#"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
    </>
  );
}
