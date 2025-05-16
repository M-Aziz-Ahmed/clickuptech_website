'use client'
import { useState } from "react"
import Image from "next/image"

const TabsSection = () => {
    const [tabs, setTabs] = useState([
        { id: 1, show: true, content: "Web Design" },
        { id: 2, show: false, content: "Web Development" },
        { id: 3, show: false, content: "Graphic Design" },
        { id: 4, show: false, content: "Video Editing" },
        { id: 5, show: false, content: "Digital Marketing" },
        { id: 6, show: false, content: "Architect Course" },
        { id: 7, show: false, content: "Content for Tab 4" },
    ])

    const handleTabClick = (tabIndex) => {
        setTabs(tabs.map((tab, index) => ({
            ...tab,
            show: index === tabIndex
        })))
    }

    return (
        <div className="tabs-container">
            <nav>
                <div className="flex container justify-around flex-wrap gap-2">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            className={`px-5 py-3 border-x fw-bolder ${tab.show ? 'text-white bg-[#1F419B] shadow-lg' : 'bg-gray-100'}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.content}
                        </button>
                    ))}
                </div>
            </nav>
            <hr />

            <br />

            <div className="tab-content container">
                {tabs[0].show && (
                    <>
                        <div className="flex gap-5 justify-center items-center flex-wrap my-5">
                            <div className="box bg-[#F7F7F7] border-x shadow text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] border-x shadow text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] border-x shadow text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] border-x shadow text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {tabs[1].show && (
                    <>
                        <div className="flex gap-5 justify-center items-center flex-wrap">
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {tabs[2].show && (
                    <>
                        <div className="flex gap-5 justify-center items-center flex-wrap">
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {tabs[3].show && (
                    <>
                        <div className="flex gap-5 justify-center items-center flex-wrap">
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                            <div className="box bg-[#F7F7F7] text-black inline-block">
                                <Image src={'/web-expert-standard-course.svg'} width={300} height={300} alt="error"></Image>
                                <div className="h6 fw-bold p-2">Web Expert Standard
                                    <br />
                                    <br />
                                    Regular : <span className="p fw-light">5 Months</span>
                                    <br />
                                    <br />
                                    Fasttrack : <span className="p fw-light">3 Months</span>
                                    <br />
                                    <br />
                                    Crash :<span className="p fw-light"> 45 Days</span>
                                    <br />
                                    <br />
                                    Training Mode :<span className="p fw-light"> Classroom | Online</span>
                                </div>
                                <div className="flex p-1 gap-2">
                                    <button className="btn btn-sm btn-primary">COURSE DETAILS</button>
                                    <button className="btn btn-sm btn-danger">Start With Free Demo</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default TabsSection