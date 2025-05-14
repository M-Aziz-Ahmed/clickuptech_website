import Image from "next/image";
import { FaDownload, FaRegCheckCircle } from "react-icons/fa"; // Importing icons
import frontImg from "@/assets/images/institude-images/institude-front-img.png"; // Adjust path as needed
import './style.css'
import Link from "next/link";


const Page = () => {
    return (
        <><div className="container">
            <section className="relative container bg-gradient-to-br from-[#06044A] to-[#3403B8] text-white overflow-hidden" >
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="container mx-auto  py-12 md:py-16 relative ">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left Side: Company Info */}
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-[Proxima]">
                                <span className=" text-orange-300"> Microsoft Office Courses </span>
                                in abu dhabi
                            </h3>
                            <p className="text-xl mb-8 text-gray-300">
                                Galaxy Computer Education and Training Institute will help you turn your career around with Microsoft Office Courses in Abu Dhabi.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link
                                    href="#"
                                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                                >
                                    <span>Download Brochure</span>
                                    <FaDownload />
                                </Link>

                                <Link
                                    href="#"
                                    className="bg-secondaryColor text-black font-semibold px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-100 transition duration-300 text-center"
                                >
                                    <span>Apply Now!</span>
                                    <FaRegCheckCircle />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Features */}
                        <div className="w-full md:w-1/2 md:pl-12">
                            {/* Right Side Image */}
                            <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                <Image
                                    src={frontImg}
                                    alt="Mobile App Development"
                                    width={700}
                                    className="w-full" // Makes image responsive
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="relative container bg-gradient-to-br from-[#06044A] to-[#3403B8] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="container mx-auto  py-12 md:py-16 relative ">
                        <div className="container my-5 mx-auto lg:px-4">
                            <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-[Proxima]" >
                                <span className=" text-orange-300">Microsoft Office</span> Courses in abu dhabi
                            </h3>
                            <p className="text-xl mb-8 m-3 text-gray-300">
                                Welcome to Galaxy Computer Education & Training Institute. Your premier destination for comprehensive Microsoft Office courses in Abu Dhabi. Whether you are a beginner or an experienced professional looking to enhance your skills, our institute offers a diverse range of courses tailored to meet your unique learning needs. With experienced trainers, state-of-the-art facilities, and hands-on training, we strive to provide you with the best learning experience possible.
                            </p>
                            <p className="text-xl mb-8 m-3 text-gray-300">
                                The course covers all the essential software programs and techniques you need to succeed in the industry, and the experienced instructors and state-of-the-art facilities will ensure you have the best possible learning experience. With so many career opportunities available, the course is a fantastic investment in your future.
                            </p>
                            <h1 className="h3">Overview of Microsoft Office Course in Abu Dhabi</h1><br />

                            <p>The Microsoft Office Course at Galaxy Computer Education is designed to equip students with essential skills in using Microsoft Office applications such as Word, Excel, PowerPoint, and Outlook. Whether you are a beginner or looking to enhance your existing skills, this course offers comprehensive training to meet your needs.
                            </p><br />

                            <h1 className="h3">Benefits of Learning Microsoft Office</h1><br />

                            <p>Learning Microsoft Office is essential in today’s digital age. It not only enhances your productivity but also opens up various career opportunities. With proficiency in Microsoft Office, you can create professional documents, analyze data effectively, deliver impactful presentations, and manage emails efficiently.
                            </p><br />

                            <h1 className="h3">Target Audience</h1><br />
                            <p>The Microsoft Office Course is suitable for individuals from diverse backgrounds, including students, working professionals, entrepreneurs, and homemakers. Whether you are pursuing higher education, advancing your career, or managing household tasks, proficiency in Microsoft Office is beneficial for everyone.
                            </p><br />

                            <h1 className="h3">Experienced Instructors
                            </h1><br />

                            <p>Galaxy Computer Education boasts a team of experienced instructors who are experts in their respective fields. With their guidance and support, you will receive personalized attention and mentorship throughout your learning journey. Our instructors are dedicated to helping you achieve your goals and succeed in your endeavors.

                            </p><br />
                            <h1 className="h3">Flexible Learning Options
                            </h1><br />
                            <p>Galaxy Computer Education offers flexible learning options, including weekday, weekend, and evening classes. Whether you prefer classroom-based learning or online sessions, we have options to suit your needs.

                            </p><br />
                            <h1 className="h3">Success Stories and Testimonials
                            </h1><br />
                            <p>Over the years, Galaxy Computer Education has helped numerous students achieve their goals and succeed in their careers. Our success stories and testimonials speak volumes about the quality of education and training we provide. From career advancements to job placements, our students have benefitted greatly from our courses

                            </p><br />

                            <h3 className="h3">WHY TO CHOOSE GALAXY COMPUTER  <span className=" text-orange-300">EDUCATION AND TRAINING INSTITUTE ?</span></h3>

                            <div>
                                <h1 className="h5 text-orange-300">1. Expert Trainers:</h1>
                                <br />
                                <p>Our seasoned instructors possess in-depth knowledge of Microsoft Office applications, ensuring you receive top-quality training.</p><br />
                            </div>
                            <div>
                                <h1 className="h5  text-orange-300">2. Comprehensive Curriculum:</h1><br />
                                <p>We offer a wide array of courses, covering popular Microsoft Office applications such as Word, Excel, PowerPoint, Outlook, Access, and more.</p><br />
                            </div>
                            <div>
                                <h1 className="h5  text-orange-300">3. Customized Training:</h1><br />
                                <p>Whether you need basic, intermediate, or advanced level training, we have courses suitable for learners of all proficiency levels.</p><br />
                            </div>
                            <div>
                                <h1 className="h5  text-orange-300">4. Hands-on Learning:</h1><br />
                                <p>Our courses emphasize practical, hands-on training, allowing you to apply what you learn immediately and gain valuable skills.</p><br />
                            </div>
                            <div>
                                <h1 className="h5  text-orange-300">5. Flexible Learning Options:</h1><br />
                                <p>We offer flexible schedules, including evening and weekend classes, to accommodate busy professionals and students.</p><br />
                            </div>
                            <div>
                                <h1 className="h5  text-orange-300">6. State-of-the-art Facilities:</h1><br />
                                <p>Our modern training facilities are equipped with the latest technology, creating an optimal learning environment.</p><br />
                            </div>
                            <div>
                                <h1 className="h5  text-orange-300">7. Affordable Pricing:</h1><br />
                                <p>We offer competitive prices and value for your money, ensuring that professional training is accessible to all.</p><br />
                            </div>





                        </div>
                    </div>
                </section>
            </section>
        </div >

        </>
    );
}

export default Page