import * as motion from "framer-motion/client";

export default function FAQ() {
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
        <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">How can I place an order?</summary>
        <div className="px-4 pb-4">
          <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">What payment methods do you accept?</summary>
        <div className="px-4 pb-4">
          <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
        </div>
      </details>

      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">What payment methods do you accept?</summary>
        <div className="px-4 pb-4">
          <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">What payment methods do you accept?</summary>
        <div className="px-4 pb-4">
          <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline hover:text-primaryColor">What payment methods do you accept?</summary>
        <div className="px-4 pb-4">
          <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
        </div>
      </details>
      {/* Add more <details> sections as needed */}
    </motion.div>
  </div>
</section>

    </>
  );
}
