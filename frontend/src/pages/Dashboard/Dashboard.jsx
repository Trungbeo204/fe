import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-600">
      <div className="w-[60%] my-2 p-4 flex items-center justify-evenly">
        <NavLink
          to={"/dashboard/home"}
          className={(isActive) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          <IoHome className="text-2xl" />
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={(isActive) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Người dùng
        </NavLink>
        <NavLink
          to={"/dashboard/songs"}
          className={(isActive) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Xe
        </NavLink>
        {/* <NavLink
          to={"/dashboard/artists"}
          className={(isActive) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Artists
        </NavLink> */}
        <NavLink
          to={"/dashboard/albums"}
          className={(isActive) =>
            isActive ? isActiveStyles : isNotActiveStyles
          }
        >
          Loại xe đang có
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
