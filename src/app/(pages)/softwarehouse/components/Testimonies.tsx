import Link from "next/link";
import { FiUser } from "react-icons/fi";

export default function Testimonies() {
  return (
    <>
      <section id="testimonies" className="py-8 bg-slate-900">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                It&apos;s not just us.
              </h1>
              <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                Here&apos;s what others have to say about us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul className="space-y-8">
              
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <FiUser className="ml-3 text-xl" />

                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            Zafar Iqbal
                          </h3>
                          <p className="text-gray-500 text-md text-xs">CEO of clickuptech</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="https://twitter.com/kanyewest"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        {" "}
                        <FiUser className="ml-3 text-xl" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Kanye West
                          </h3>
                          <p className="text-gray-500 text-md">
                            Rapper &amp; Entrepreneur
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Find God.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
             
            </ul>

            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="https://twitter.com/paraga"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                      <FiUser  className="ml-3 text-xl" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Muhammad Mehmood 
                          </h3>
                          <p className="text-gray-500 text-md">CEO of BizSolution</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Enim neque volutpat ac tincidunt vitae semper. Mattis
                        aliquam faucibus purus in massa tempor. Neque vitae
                        tempus quam pellentesque nec. Turpis cursus in hac
                        habitasse platea dictumst.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
             
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                      <FiUser  className="ml-3 text-xl" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Tim Cook
                          </h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 lg:block">
             
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="https://twitter.com/dan_schulman"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                      <FiUser  className="ml-3 text-xl" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Dan Schulman
                          </h3>
                          <p className="text-gray-500 text-md">CEO of PayPal</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Quam pellentesque nec nam aliquam sem et tortor
                        consequat id. Enim sit amet venenatis urna cursus.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="https://twitter.com/satyanadella"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                      <FiUser  className="ml-3 text-xl" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Satya Nadella
                          </h3>
                          <p className="text-gray-500 text-md">
                            CEO of Microsoft
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Tortor dignissim convallis aenean et tortor at. At
                        ultrices mi tempus imperdiet nulla malesuada. Id cursus
                        metus aliquam eleifend mi. Quis ipsum suspendisse
                        ultrices gravida dictum fusce ut.
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
      
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
