import React from "react";
import { Link } from "react-router-dom";
import { project } from "../utils/helper";
import Contact from "./Contact";
import ProjectInfo from "./ProjectInfo";

export default function Projects() {
  return (
    <section className="bg-black/80   text-[white]  mx-auto  " id="project">
      <div className="py-12 bg-black/40  backdrop-blur-sm text-white  ">
        <h1 className="px-10 text-[4em] py-3 max-[768px]:text-center max-[768px]:text-[3em] ">
          PORTFOLIO
        </h1>
        <ul className="flex flex-wrap items-center justify-center ">
          {project.map((item) => (
            <div className="m-8 cursor-pointer rounded-lg w-9/12 min-[1024px]:w-6/12 bg-white/10">
              <Link to={item.link} target="_blank">
                <div>
                  <img
                    src={item.img}
                    alt="img"
                    className="rounded-lg w-full max-h-full shadow-md  p-2"
                  />
                </div>
              </Link>

              <ProjectInfo data={item} />
            </div>
          ))}
        </ul>
      </div>

      <div className=" text-center bg-black/80 backdrop-blur-sm pb-12">
        <div className="p-10">
          <p className="text-xl mb-6">LET'S CONNECT HERE</p>
          <Contact />
        </div>
      </div>
    </section>
  );
}
