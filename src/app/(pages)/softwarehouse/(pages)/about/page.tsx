import Image from "next/image";
import aboutus from "@/assets/images/aboutus.png";

export default function About() {
  return (
    <>
        <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
                <Image src= {aboutus} alt="logo" width={600} height={600} />
            </div>
        </div>
        <div className="sm:w-1/2 p-5">
            <div className="text">
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600 border-b-2 border-indigo-600">Clickuptech</span>
                </h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                    doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.
                </p>
            </div>
        </div>
    </div>
    </>
  );
}
