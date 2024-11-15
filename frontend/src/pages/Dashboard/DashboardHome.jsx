import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { TbUserStar } from "react-icons/tb";
import { FiMusic } from "react-icons/fi";
import { GiMusicalNotes } from "react-icons/gi";
import Dashboard from "./Dashboard";
import DashboardHomeBox from "../../Components/Dashboard/DashboardHomeBox";
import UserContext from "../../Context/UserContext/UserContext";
import SongContext from "../../Context/SongContext/SongContext";

const DasgboardHome = () => {
  const { totalUsers } = useContext(UserContext);
  const { allSong } = useContext(SongContext);

  return (
    <>
      <Dashboard />
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="mt-40 grid grid-cols-3 gap-12">
          <DashboardHomeBox
            bgColor="bg-teal-100"
            icon={<FaUsers />}
            text="Ngừoi dùng"
            count={totalUsers}
          />
          <DashboardHomeBox
            bgColor="bg-slate-200"
            icon={<FiMusic />}
            text="Xe"
            count={allSong.length}
          />
          <DashboardHomeBox
            bgColor="bg-red-300"
            icon={<GiMusicalNotes />}
            text="Loại xe đang có"
            count="8"
          />
        </div>
      </div>
    </>
  );
};

export default DasgboardHome;
