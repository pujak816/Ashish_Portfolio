import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Controls = () => {
  return (
    <div
      className="flex fixed justify-center  top-[50%] right-[1.5%] max-[640px]:top-[90%] max-[640px]:left-[0.11%]  max-[640px]:gap-20 md:flex-col md:-translate-y-20  max-[640px]:bg-black/80 max-[640px]:w-[100%]  "
      id="controls"
    >
      <NavLink to="#" smooth>
        <div className="cursor-pointer bg-white/20 w-12 h-12 rounded-full  my-5 hover:bg-violet-600  max-[640px]:bg-white/70  transition-all duration-300 ">
          <HomeIcon
            sx={{
              fontSize: 28,
              color: "#fff",
              margin: "10px",
            }}
          />
        </div>
      </NavLink>

      <NavLink to="#about" smooth>
        <div className="cursor-pointer bg-white/20 w-12 h-12 rounded-full  my-5  hover:bg-violet-600  max-[640px]:bg-white/70   transition-all duration-300 ">
          <ManageAccountsIcon
            sx={{ fontSize: 28, color: "#fff", margin: "10px" }}
          />
        </div>
      </NavLink>

      <NavLink to="#project" smooth>
        <div className="cursor-pointer bg-white/20 w-12 h-12 rounded-full  my-5  hover:bg-violet-600 max-[640px]:bg-white/70   transition-all duration-300 ">
          <WorkIcon sx={{ fontSize: 28, color: "#fff", margin: "10px" }} />
        </div>
      </NavLink>
    </div>
  );
};
export default Controls;
