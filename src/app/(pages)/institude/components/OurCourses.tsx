import * as motion from "framer-motion/client";

export default function OurCourses() {
  const cardData = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Creating responsive and interactive websites.",
    },
    {
      icon: "🔍",
      title: "Full Stack Development",
      description: "Improving your website’s visibility on search engines.",
    },
    {
      icon: "🎨",
      title: "Mearn Stack",
      description: "Designing eye-catching graphics and visual content.",
    },
    {
      icon: "📈",
      title: "Mean Stack",
      description: "Strategies to enhance your online presence and reach.",
    },

    {
      icon: "🌐",
      title: "Google Flutter Development",
      description: "Creating responsive and interactive websites.",
    },
    {
      icon: "🔍",
      title: "Android Development",
      description: "Improving your website’s visibility on search engines.",
    },
    {
      icon: "🎨",
      title: "React Native Development",
      description: "Designing eye-catching graphics and visual content.",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Strategies to enhance your online presence and reach.",
    },

    {
      icon: "🌐",
      title: "Graphic Design",
      description: "Creating responsive and interactive websites.",
    },
    {
      icon: "🔍",
      title: "Search Engine Optimization",
      description: "Improving your website’s visibility on search engines.",
    },
    {
      icon: "🎨",
      title: "Complete UI/UX",
      description: "Designing eye-catching graphics and visual content.",
    },
    {
      icon: "📈",
      title: "Programming Languages",
      description: "Strategies to enhance your online presence and reach.",
    },
  ];

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
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="service-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl  border-2 border-transparent hover:border-secondaryColor "
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-5xl mb-4 transition-transform duration-300 transform hover:rotate-12"
            >
              {card.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2  text-[#3E5AFD] font-[Proxima]">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
