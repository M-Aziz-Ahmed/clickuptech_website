import Image from "next/image";
import { FaDownload, FaRegCheckCircle } from "react-icons/fa";
import frontImg from "@/assets/images/institude-images/institude-front-img.png";
import styles from './page.module.css'; // Using CSS Modules instead of global CSS
import Link from "next/link";

const Page = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className="relative container bg-gradient-to-br from-[#06044A] to-[#3403B8] text-white overflow-hidden font-[Proxima]">
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            {/* Left Side: Company Info */}
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlight}>Website Design Courses</span> IN ABU DHABI
              </h1>
              <p className={styles.heroDescription}>
                Take advantage of the opportunity to study a language and explore new career options in Abu Dhabi.
              </p>
              <div className={styles.buttonGroup}>
                <Link
                  href="#"
                  className={`${styles.button} ${styles.outlineButton}`}
                  aria-label="Download Brochure"
                >
                  <span>Download Brochure</span>
                  <FaDownload />
                </Link>

                <Link
                  href="#"
                  className={`${styles.button} ${styles.primaryButton}`}
                  aria-label="Apply Now"
                >
                  <span>Apply Now!</span>
                  <FaRegCheckCircle />
                </Link>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className={styles.heroImage}>
              <Image
                src={frontImg}
                alt="Students learning web design"
                width={700}
                height={475}
                priority // Important for above-the-fold images
                className={styles.responsiveImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentOverlay}></div>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}>Website Design</span> Courses in Abu Dhabi
          </h2>
          
          <div className={styles.textBlock}>
            <p>
              Today websites are essential for every company in any sector. The web is growing rapidly, and its technologies and methodologies are evolving at an incredible pace. The latest design and development techniques are making the field's scope wider, and course content is expanding daily.
            </p>
            <p>
              At Galaxy Computer Education, you can now choose customized content or specialize in different sectors of web design. Our Web Design and Development course is divided into four specialized areas at Galaxy Computer Education & Training Institute.
            </p>
            <p>
              Welcome to Galaxy Computer Education and Training Institute. Discover the art of crafting visually stunning and user-friendly websites with our website designing courses in Abu Dhabi. We offer a range of programs, including Web Designing at basic and advanced levels, WordPress, and Web Mastering. Elevate your skills with our expert instructors and position yourself as a proficient web designer in the dynamic digital landscape.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <section className={styles.whyChooseUs}>
            <h2 className={styles.sectionTitle}>
              WHY TO CHOOSE <span className={styles.highlight}>DIGISUKOOL</span> EDUCATION AND TRAINING INSTITUTE?
            </h2>
            
            <div className={styles.benefitsList}>
              {[
                {
                  title: "Expert Trainers",
                  description: "Our seasoned instructors possess in-depth knowledge of Microsoft Office applications, ensuring you receive top-quality training."
                },
                {
                  title: "Comprehensive Curriculum",
                  description: "We offer a wide array of courses, covering popular Microsoft Office applications such as Word, Excel, PowerPoint, Outlook, Access, and more."
                },
                {
                  title: "Customized Training",
                  description: "Whether you need basic, intermediate, or advanced level training, we have courses suitable for learners of all proficiency levels."
                },
                {
                  title: "Hands-on Learning",
                  description: "Our courses emphasize practical, hands-on training, allowing you to apply what you learn immediately and gain valuable skills."
                },
                {
                  title: "Flexible Learning Options",
                  description: "We offer flexible schedules, including evening and weekend classes, to accommodate busy professionals and students."
                },
                {
                  title: "State-of-the-art Facilities",
                  description: "Our modern training facilities are equipped with the latest technology, creating an optimal learning environment."
                },
                {
                  title: "Affordable Pricing",
                  description: "We offer competitive prices and value for your money, ensuring that professional training is accessible to all."
                }
              ].map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <h3 className={styles.benefitTitle}>
                    <span className={styles.highlight}>{index + 1}.</span> {benefit.title}
                  </h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Two Column Section */}
          <div className={styles.twoColumnSection}>
            {/* What You Learn Here */}
            <div className={styles.column}>
              <h2 className={styles.sectionTitle}>
                What <span className={styles.highlight}>You Learn Here</span>
              </h2>
              <ol className={styles.learningList}>
                {[
                  {
                    title: "Web Designing (Basic Level)",
                    items: [
                      "HTML and CSS Fundamentals",
                      "Introduction to Web Design Principles",
                      "Responsive Web Design"
                    ]
                  },
                  {
                    title: "Web Designing (Advanced Level)",
                    items: [
                      "Advanced HTML, CSS, and JavaScript",
                      "Graphic Design for the Web",
                      "Web Animation Techniques"
                    ]
                  },
                  {
                    title: "WordPress",
                    items: [
                      "Installation and Configuration",
                      "Theme Customization",
                      "Plugin Integration"
                    ]
                  },
                  {
                    title: "Web Mastering",
                    items: [
                      "Website Deployment",
                      "Maintenance and Security",
                      "Performance Optimization"
                    ]
                  }
                ].map((item, index) => (
                  <li key={index} className={styles.learningItem}>
                    <h3 className={styles.learningTitle}>{item.title}</h3>
                    <ul className={styles.learningSubList}>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            {/* Advantages Section */}
            <div className={styles.column}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>The Advantages</span> of Website Design Courses
              </h2>
              <ol className={styles.advantagesList}>
                {[
                  {
                    title: "In-Demand Skills",
                    items: [
                      "Acquire skills that are highly sought after in today's digital job market.",
                      "Meet the growing demand for competent web designers in Abu Dhabi."
                    ]
                  },
                  {
                    title: "Career Advancement",
                    items: [
                      "Open doors to a variety of career opportunities in web development and design.",
                      "Enhance your employability by showcasing proficiency in the latest web technologies."
                    ]
                  },
                  {
                    title: "Entrepreneurial Opportunities",
                    items: [
                      "Start your own web design business or freelance as a web designer.",
                      "Cater to the increasing demand for online presence in the business world."
                    ]
                  },
                  {
                    title: "Creativity and Innovation",
                    items: [
                      "Unleash your creativity by designing visually appealing and functional websites.",
                      "Stay at the forefront of innovation in the ever-evolving field of web design."
                    ]
                  },
                  {
                    title: "Global Reach",
                    items: [
                      "With the skills gained, contribute to the creation of websites with a global reach.",
                      "Work on projects that transcend geographical boundaries."
                    ]
                  }
                ].map((item, index) => (
                  <li key={index} className={styles.advantageItem}>
                    <h3 className={styles.advantageTitle}>{item.title}</h3>
                    <ul className={styles.advantageSubList}>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;