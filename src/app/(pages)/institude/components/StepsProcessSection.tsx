export default function StepsProcessSection() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 24C40 35 100 35 150 30C250 20 350 10 450 12C550 14 650 24 750 30C850 36 875 40 900 44"
                    stroke="#A1A1AA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="5 10"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      1
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Register
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                    Register with your email or using sign up with goolgle
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      2
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Create your image
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                    Choose AI assistants to create your image variations.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      3
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Download
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                    Download zip of all variations
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
