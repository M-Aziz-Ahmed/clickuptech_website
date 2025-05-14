import Image from "next/image";
import { FaDownload, FaRegCheckCircle } from "react-icons/fa"; // Importing icons
import frontImg from "@/assets/images/institude-images/institude-front-img.png"; // Adjust path as needed
// import './style.css'
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
                                <span className=" text-orange-300"> Graphic Design & Animation Course  </span>
                                In Abu Dhabi
                            </h3>
                            <p className="text-xl mb-8 text-gray-300">
                                Galaxy Computer Education and Training Institute’s Graphic Design & Animation Course in Abu Dhabi will teach you the tools and abilities you need to become a professional designer and animator.
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
                        <div className="container my-5 mx-auto lg:px-20">
                            <div className="my-20">
                                <h3 className="text-5xl md:text-4xl font-bold mb-6 leading-tight font-[Proxima]" >
                                    <span className=" text-orange-300">Graphic Design & Animation Course</span> in Abu Dhabi
                                </h3>
                                <p className="text-xl mb-8 m-3 text-gray-300">
                                    Are you interested in pursuing a career in graphic designing or animation? If so, Galaxy Computer Education & Training Institute Abu Dhabi is the perfect place to join Graphic Designing and Animation Courses.
                                </p>
                                <p className="text-xl mb-8 m-3 text-gray-300">
                                    The course covers all the essential software programs and techniques you need to succeed in the industry, and the experienced instructors and state-of-the-art facilities will ensure you have the best possible learning experience. With so many career opportunities available, the course is a fantastic investment in your future.
                                </p>
                            </div>
                            <div className="my-20">
                                <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight">What is <span className="text-orange-300">Graphic Designing and Animation </span>?</h1><br />
                                <p>
                                    Graphic designing and animation are two different fields, but they share many similarities. Graphic designers use visual elements such as images, colors, and typography to create designs for various media, including print, digital, and social media. Animators, on the other hand, use software to create moving images, typically for film, television, and video games.
                                </p><br />
                            </div>
                            <div className="my-20">
                                <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight"><span className="text-orange-300">Software Used</span> in the Courses</h1><br />

                                <p>To succeed as a graphic designer or animator, you need to be proficient in several software programs. In the graphic designing and animation course in Abu Dhabi, students will learn how to use the following software programs:
                                </p><br /></div>

                            <div className="my-20">

                                <h1 className="h5 text-orange-300">Adobe Illustrator</h1><br />

                                <p>Adobe Illustrator is a vector graphics editor that is used to create illustrations, logos, icons, and other graphics. It is particularly useful for creating scalable designs that can be resized without losing quality.
                                </p><br />

                                <h1 className="h5 text-orange-300">Adobe Photoshop</h1><br />
                                <p>Adobe Photoshop is a raster graphics editor that is used to edit and manipulate digital images. It is particularly useful for tasks such as photo retouching, color correction, and image manipulation.
                                </p><br />

                                <h1 className="h5 text-orange-300">Adobe InDesign
                                </h1><br />

                                <p>Adobe InDesign is a desktop publishing software program that is used to create printed or digital documents such as brochures, magazines, and ebooks. It is particularly useful for designing layouts that combine text and images.

                                </p><br />
                                <h1 className="h5 text-orange-300">Adobe Premiere
                                </h1><br />
                                <p>Adobe Premiere is a video editing software program that is used to edit and manipulate video footage. It is particularly useful for creating professional-quality videos that can be shared on social media or streamed online.

                                </p><br />
                                <h1 className="h5 text-orange-300">Adobe After Effects
                                </h1><br />
                                <p>Adobe After Effects is a visual effects and motion graphics software program that is used to create special effects for film, television, and video games. It is particularly useful for creating animations and motion graphics.

                                </p><br />
                            </div>
                            <div className="my-20">
                                <h3 className="h2 text-orange-300">Course Details</h3>
                                <ul>
                                    <li className="my-5">The graphic designing and animation course in Abu Dhabi is designed to provide students with the skills and knowledge they need to succeed in the industry. The course covers a range of topics, including:</li>
                                    <li className="mx-4">
                                        <ol style={{listStyle:'decimal'}}>
                                            <li>Fundamentals of design</li>
                                            <br />
                                            <li>Color theory</li>
                                            <br />
                                            <li>Typography</li>
                                            <br />
                                            <li>Illustration</li>
                                            <br />
                                            <li>Photo editing</li>
                                            <br />
                                            <li>Desktop publishing</li>
                                            <br />
                                            <li>Video editing</li>
                                            <br />
                                            <li>Motion graphics</li>
                                        </ol>
                                    </li>
                                    <li className="my-5">The course is taught by experienced instructors who are experts in their fields. Students will have access to state-of-the-art facilities and equipment, including high-end computers, design tablets, and digital cameras.</li>
                                </ul>


                            </div>
                            <div className="my-20">
                                <h3 className="h2 text-orange-300">Career Opportunities </h3>
                                <ul>
                                    <li className="my-5">A career in graphic designing or animation can be both challenging and rewarding. Graduates of the graphic designing and animation course in Abu Dhabi can pursue a variety of career paths, including:</li>
                                    <li className="mx-4">
                                        <ol style={{listStyle:'decimal'}}>
                                            <li>FGraphic designer</li>
                                            <br />
                                            <li>Web designer</li>
                                            <br />
                                            <li>UI/UX designer</li>
                                            <br />
                                            <li>Motion graphics designer</li>
                                            <br />
                                            <li>Video editor</li>
                                            <br />
                                            <li>3D animator</li>
                                            <br />
                                            <li>Visual effects artist</li>
                                            <br />
                                            <li>Game designer</li>
                                        </ol>
                                    </li>
                                </ul>


                            </div>

                            <div className="my-20">
                                <h3 className="h3 my-5 text-xl md:text-4xl font-bold mb-6 leading-tight">WHY TO CHOOSE DIGISUKOOL  <span className=" text-orange-300">IT TRAINING INSTITUTE ?</span></h3>

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
                    </div>
                </section>
            </section>
        </div >

        </>
    );
}

export default Page