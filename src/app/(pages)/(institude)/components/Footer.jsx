import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";


export default function FooterSection() {
  return (
    <>
      <footer className="bg-primaryColor">
        <div className="container mx-auto p-0 md:p-8 xl:px-0">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <Link href="/">
                    <div className="flex items-center">
                      <Image src={logo} alt="logo" width={200} />
                    </div>
                  </Link>
                </div>
                <div className="max-w-md pr-16 text-md text-gray-200">
                  Enhance productivity and efficiency with cutting-edge artificial intelligence solutions for your business operations.
                </div>
                <div className="flex space-x-2">
                  <Link href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                    <span className="sr-only">Linkedin</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                    <span className="sr-only">Twitter</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">  
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link href="/aiplatform" className="text-md leading-6 text-gray-300 flex items-center hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          AI Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/aialgorithms" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          AI Algorithms
                        </Link>
                      </li>
                      <li>
                        <Link href="/industryapplications" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Industry Applications
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link href="/predictiveanalysis" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Predictive Analysis
                        </Link>
                      </li>
                      <li>
                        <Link href="/customerexperience" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Customer Experience
                        </Link>
                      </li>
                      <li>
                        <Link href="/automation" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Automation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link href="/pricing" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/casestudies" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link href="/aboutus" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/contactus" className="text-md leading-6 flex items-center text-gray-300 hover:text-gray-50">
                          <BiChevronRight className="text-blue-500" />
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
              <div className="text-md text-center text-white">
                Copyright © 2024 . Crafted with
                <span className="text-gray-50">♥</span> by Clicuptech Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
