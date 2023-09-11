import React from "react";
import Skills from "./Skills";
import resume from "../assets/Ashish's Resume.pdf";

const About = () => {
  return (
    <section
      className="overflow-hidden bg-black/95 flex  max-[1024px]:flex-col "
      id="about_section"
    >
      <div
        className="p-20 text-white w-[50%]  max-[1024px]:w-full max-[1024px]:p-6 max-[1024px]:items-start max-[1024px]:text-left"
        id="about"
      >
        <h1 className="font-extrabold text-[28px] mb-1">ASHISH SHIRODKAR</h1>
        <h5 className="text-violet-400 mb-10">DATA ANALYST</h5>
        <p className=" ">
          Hello, I'm Ashish Shirodkar. As an aspiring Data Analyst, I bring my
          expertise as a seasoned Bid Analyst to the world of data-driven
          insights. With a passion for unraveling complex information and a keen
          eye for detail, I am dedicated to translating raw data into actionable
          strategies.
          <br /> My proven track record in analyzing bids and identifying growth
          opportunities equips me to excel in uncovering meaningful patterns and
          trends. Committed to continuous learning, I am eager to leverage my
          analytical skills to drive impactful decisions and contribute to
          data-powered solutions. Let's unlock the full potential of data
          together.
        </p>
        <button className="bg-white/30 px-4 py-1  hover:bg-violet-800 rounded-lg mt-10">
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>{" "}
        </button>
      </div>
      <Skills />
    </section>
  );
};
export default About;
