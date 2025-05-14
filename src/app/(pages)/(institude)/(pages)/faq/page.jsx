import * as motion from "framer-motion/client";

export default function page() {
  return (
    <>
      <section className="bg-[#F4F0FC] text-black py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center text-5xl font-[Proxima] custom-tracking font-extrabold mb-5 mt-5"
          >
            Frequently  <span className="text-[#3E5AFD]">Asked Questions</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 text-lg font-[Proxima]"
          >
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">Can I apply for any program online?</summary>
              <div className="px-4 pb-4">
                <p>You can fill out the application online through the website and submit the form online. After submission, you will receive the reference number. Candidate has to provide the fee within the given deadline, which can be paid through the bank or directly to the office. Moreover, the course outline and class schedule can also be obtained through email.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">How much do I need to pay in advance for registration?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The registration fee that a candidate has to pay for the course depends on the time duration of that particular course. For example:
                  <br />
                  <br />
                  <ul>
                    <li>•	PKR 1,000 for 1 Month to 3 Months courses</li>
                    <li>•	PKR 2,000 for 6 Months of courses</li>
                  </ul>
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">What is the attendance policy for the class?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  In the class, attendance will be marked in the first 10 minutes when the class starts. Moreover, every student has to maintain 80% attendance in the registered course. Otherwise will not be entitled to the certification—further the late coming and early leaving without any notice or valid reason marked as absent.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">When will I get the certificate of completion awarded?
              </summary>
              <div className="px-4 pb-4">
                <p>A certificate of completion for the course will be issued within a month after the course concludes. After this timeframe, Digi Sukool will not be held responsible for any loss or damage to the certificate.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">What are the technical requirements of this program?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  To access the Digi Sukool program, you need to have a good stable internet connection at home along with a desktop, laptop, or an android phone.
                </p>
              </div>
            </details>
            {/* Add more <details> sections as needed */}
          </motion.div>
        </div>
      </section>

    </>
  );
}
