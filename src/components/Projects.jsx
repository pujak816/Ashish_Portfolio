import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { project } from "../utils/helper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Contact from "./Contact";

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

              <div className="text-center py-1 m-2  max-[768px]:w-full max-[768px]:m-0 ">
                <h2 className="font-bold text-2xl mb-1 tracking-wider text-white max-[768px]:text-[14px]">
                  {item.title}
                </h2>
                <div className="flex justify-center items-center gap-8 ">
                  <h3 className="text-xl text-white/80 tracking-wide pb-[4px] max-[768px]:text-[12px]">
                    <span className="text-orange-500 font-medium">
                      Tech-Stack:{" "}
                    </span>
                    {item.tech}
                  </h3>
                  <Link to={item.github} target="_blank">
                    <GitHubIcon
                      sx={{ fontSize: 24, color: "#fff", margin: "10px" }}
                      className="hover:text-orange-500"
                    />
                  </Link>
                </div>
              </div>
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
