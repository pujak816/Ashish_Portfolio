import React from "react";
import Controls from "./Controls";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="bg-black/80 h-screen max-[1024px]:h-[70vh]  ">
          <div className="p-40 h-screen  bg-black/40 backdrop-blur-sm text-center max-[640px]:px-0 xl:pt-60 max-[1024px]:h-[70vh] ">
            <div>
              <div>
                <img
                  src={require("../assets/Ashi.png")}
                  alt="name_logo"
                  className="mx-auto  "
                />
              </div>

              <p className="text-white py-3 tracking-[.6em] text-base ">
                DATA ANALYST
              </p>
            </div>
            <div className="space-x-7 my-5 flex justify-center items-center">
              <Contact />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Controls />
    </div>
  );
}
