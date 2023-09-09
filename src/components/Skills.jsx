import React from "react";
import { skill } from "../utils/helper.js";

export default function Skills() {
  return (
    <section className="bg-black/95" id="skill">
      <div className=" flex flex-wrap p-28  max-[1024px]:p-2 ">
        {skill.map((item) => (
          <div className="w-30 m-6  max-[1024px]:w-6">
            <img
              src={item.link}
              alt="html_logo"
              className="max-w-[70px] max-[1024px]:max-w-[40px] "
            />
            <div className="text-white  max-[768px]:text-[13px] ">
              {item.tech}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
