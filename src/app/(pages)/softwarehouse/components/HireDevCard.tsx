import * as motion from "framer-motion/client";

export default function HireDevCard() {
    return (
      <div className=" width-full  bg-[#F4F0FC] p-5">
         <motion.h2
          initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center text-5xl font-[Proxima] custom-tracking font-extrabold mb-5 mt-5"
        >
          Hire Our <span className="text-[#3E5AFD]">Developers</span>
        </motion.h2>

        <p className="mb-12 text-lg text-gray-500 text-center">
          Here are a few of the awesome services we provide.
        </p>
        <div className="w-full ml-5 mr-5">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            {/* Card 1 */}
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">
                    A decentralized application (dapp) is built on a decentralized network that combines a smart contract and a frontend user interface.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">
                    Web 3.0 focuses on understanding and analyzing data to provide a semantic web.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            {/* Card 3 */}
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">
                    A Project Audit assesses the extent to which project management standards are being upheld.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Card 4 */}
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">
                    A security hacker explores methods for breaching defenses and exploiting weaknesses in a computer system or network.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Card 5 */}
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                  <p className="mb-2 text-gray-600">
                    Bot development frameworks are advanced software tools that eliminate a large amount of manual work and accelerate the development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  