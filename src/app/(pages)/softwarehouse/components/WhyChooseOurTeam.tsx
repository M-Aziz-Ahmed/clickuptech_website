import * as motion from "framer-motion/client";

export default function WhyChooseOurTeam() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <section id="new-features" className="py-2 bg-white sm:py-4 lg:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            
              {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center text-5xl font-[Proxima] custom-tracking font-extrabold mb-5 mt-5"
        >
          Why Choose Our  <span className="text-[#3E5AFD]">Development Team</span>
        </motion.h2>

           
          </div>
          <div className="grid grid-cols-1 mt-2 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            {/* <!-- Feature 1 --> */}
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
              Custom Solutions
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Track and analyze your data with powerful analytics tools. Gain
                valuable insights for better decision-making.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
              Expert Team
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Seamlessly integrate with your existing tools and systems for a
                smooth workflow experience.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
              Timely Delivery
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Ensure the safety of your data with top-notch security features.
                Your privacy is our priority.
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i className="fa-solid fa-cloud text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
              Transparent Process
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Access your data from anywhere with seamless cloud integration.
                Work without boundaries.
              </p>
            </div>

            {/* <!-- Feature 5 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
              Scalable Architecture:
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Organize your workflow with efficient task management features.
                Stay on top of your projects effortlessly.
              </p>
            </div>

            {/* <!-- Feature 6 --> */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i className="fa-solid fa-bolt text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
              Ongoing Support
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Monitor and measure your performance with comprehensive metrics.
                Optimize your processes for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
