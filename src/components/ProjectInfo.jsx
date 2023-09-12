import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectInfo = ({ data }) => {
  const { title, tech, link, github } = data;
  console.log(tech);
  return (
    <div className="text-center py-1 m-2  max-[768px]:w-full max-[768px]:m-0 ">
      <h2 className="font-bold text-2xl mb-1 tracking-wider text-white max-[768px]:text-[14px]">
        {title}
      </h2>
      <div className=" justify-center items-center">
        <h3 className="text-xl text-white/80 tracking-wide pb-[4px] max-[768px]:text-[12px]">
          <span className="text-orange-500 font-medium">Tech-Stack: </span>
          <span>{tech}</span>
        </h3>
        <div>
          <Link to={link} target="_blank">
            <OpenInNewIcon
              sx={{ fontSize: 24, color: "#fff", margin: "10px" }}
              className="hover:text-orange-500"
            />
          </Link>
          <Link to={github} target="_blank">
            <GitHubIcon
              sx={{ fontSize: 24, color: "#fff", margin: "10px" }}
              className="hover:text-orange-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
