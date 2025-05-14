'use client'
import Image from "next/image";
import add from '@/assets/images/add.png'
import minus from '@/assets/images/minus (1).png'
import { FaDownload, FaRegCheckCircle } from "react-icons/fa"; // Importing icons
import frontImg from "@/assets/images/institude-images/institude-front-img.png"; // Adjust path as needed
// import './style.css'
import Link from "next/link";
import { useState } from "react";


const Page = () => {
    const [tabs, setTabs] = useState([
        { tab: '1', show: false },
        { tab: '2', show: false },
        { tab: '3', show: false },
    ])
    return (
        <><div className="container">
            <section className="relative container bg-gradient-to-br from-[#06044A] to-[#3403B8] text-white overflow-hidden" >
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="container mx-auto  py-12 md:py-16 relative ">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left Side: Company Info */}
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-[Proxima]" >
                                <span className=" text-orange-300">UI/UX Design Course</span> in Abu Dhabi
                            </h3>
                            <p className="text-xl mb-8 text-gray-300">
                                Transform Your Ideas into Seamless Digital Experiences with Our Comprehensive UI/UX Design Course in Abu Dhabi
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
                            {/* <div className="my-20">
                                <h3 className="text-5xl md:text-4xl font-bold mb-6 leading-tight font-[Proxima]" >
                                    <span className=" text-orange-300">UI/UX Design Course</span> in Abu Dhabi
                                </h3>
                                <p className="text-xl mb-8 m-3 text-gray-300">
                                    Transform Your Ideas into Seamless Digital Experiences with Our Comprehensive UI/UX Design Course in Abu Dhabi
                                </p>
                            </div> */}
                            <div className="my-20">
                                <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight"><span className="text-orange-300">UI/UX  </span>Design Course in Abu Dhabi<br /><br />
                                    <div className="h4 text-gray-400">
                                        Master User-Centric UI/UX Design at Galaxy Computer Education
                                    </div>
                                </h1>
                                <p className="lg:w-[58vw]">
                                    At Galaxy Computer Education, we offer the best UI/UX Design Course in Abu Dhabi, tailored to equip you with essential skills in creating intuitive, visually engaging digital interfaces. Whether you’re a beginner or looking to enhance your design expertise, this course covers all aspects of UI/UX design, from foundational principles to advanced prototyping techniques.
                                    <br />
                                    <br />
                                    Our experienced instructors guide you through Adobe XD and Photoshop, industry-standard tools for design and prototyping, ensuring hands-on experience with practical projects. You’ll master essential concepts such as wireframing, creating interactive prototypes, user testing, and animations. Our course also emphasizes the importance of user research, allowing you to design with a deep understanding of user needs and behaviors.
                                </p><br />
                            </div>
                            <div className="my-20">
                                <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight"><span className="text-orange-300">Digital Marketing</span> Courses Outline</h1><br />

                                <div className="container">
                                    <div className="dropdown">
                                        <div
                                            className={`d-flex  ${tabs[0].show ? `text-orange-400` : `text-black bg-white`} lg:p-3 items-center justify-between lg:px-5 transition-colors duration-900`}
                                            onClick={() => setTabs(tabs.map((tab, i) =>
                                                i === 0 ? { ...tab, show: !tab.show } : tab
                                            ))}
                                        >
                                            <div className="h4">Module : 01 Introduction to UI/UX</div>
                                            {tabs[0].show ? (
                                                <div className="h4"><Image src={minus} width={20} alt="➕" /></div>
                                            ) : (
                                                <div className="h4 fw-bolder" ><Image src={add} width={20} alt="➕"></Image></div>
                                            )}
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${tabs[0].show ? 'max-h-96' : 'max-h-0'}`}>
                                            {tabs[0].show && (
                                                <div className="flex flex-col bg-white lg:p-5 text-black">
                                                    <ul>
                                                        <li><div className="h5 fw-bolder">What is UI/UX Design?</div></li>
                                                        <li><div className="p">Definitions of User Interface (UI) and User Experience (UX)</div></li>
                                                        <li><div className="p">Importance in today's digital landscape</div></li>
                                                        <br />
                                                        <li><div className="h5 fw-bolder">Benefits of UI/UX Design:</div></li>
                                                        <li><div className="p">Enhanced user satisfaction</div></li>
                                                        <li><div className="p">Increased user engagement and retention</div></li>
                                                        <li><div className="p">Competitive advantage</div></li>
                                                        <br />
                                                        <li><div className="h5 fw-bolder">Who Can Learn This Course:</div></li>
                                                        <li><div className="p">Roles that benefit from UI/UX knowledge</div></li>


                                                        
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                                        <ol style={{ listStyle: 'decimal' }}>
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
                                        <ol style={{ listStyle: 'decimal' }}>
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