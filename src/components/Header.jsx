import React from "react";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-scroll hover:bg-fixed bg-cover">
      <Outlet />
    </div>
  );
}
