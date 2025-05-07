import React from "react";
import "@/css/bganimation.css"; // Ensure the animation CSS is imported
import HomePage from "./(pages)/home/page";


export default function Home() {


  return (

    <>
      <div className="area">
      <div className="circles">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <HomePage />
    </div>
  </>
  );
}
