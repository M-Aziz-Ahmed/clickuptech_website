import * as motion from "framer-motion/client";
import Data from "../(pages)/courses/data";
import Link from "next/link";
import Image from "next/image";

export default function OurCourses() {
  const { data } = Data()

  return (
    <div className="width-full bg-[#F4F0FC] p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center text-5xl font-[Proxima] custom-tracking font-extrabold  mt-5"
      >
        <h2>
          <span className="bg-[#3E5AFD] inline-block text-transparent bg-clip-text text-5xl font-[Proxima] font-extrabold">
            Our Courses
          </span>
        </h2>
        <p className="mb-12 text-lg text-black text-center font-[Proxima]">
          Here are a few of the awesome courses we provide.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 hover:text  ">
        {data.map((card, index) => (
          <Link href={`${card.link}`} key={card.title} >
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#1F419B] transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#d4defa] group-hover:bg-white transition-all duration-300 border-[1px] border-[#1F419B]">
                  {/* <Image
                    src={card.icon}
                    alt="androidImg"
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  {card.icon}
                </span>

                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <div className="h4">{card.title}</div>
                  <p>
                    {card.description}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
