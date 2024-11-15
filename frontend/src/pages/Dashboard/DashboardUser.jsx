import React, { useContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import DashboardUserContent from "../../Components/DashboardUser/DashboardUserContent";
import DashboardUserHeader from "../../Components/DashboardUser/DashboardUserHeader";
import Search from "../../Components/Search/Search";
import UserContext from "../../Context/UserContext/UserContext";
import authAPI from "../../apis/authAPI";

const DashboardUser = () => {
 
  const {allUsers,setAllUsers,setTotalUsers,handleDeleteUser} = useContext(UserContext)

  useEffect(()=>{
    const getAllUsers = async ()=>{
      const response = await authAPI.getAllUsers();
      if(response) {
        setAllUsers(response.data.data);
        setTotalUsers(response.data.pagination.totalCounts);
      }
      return response;
    }
    getAllUsers()
  },[])
  return (
    <>
      <Dashboard />
      <div className="w-full flex flex-col items-center justify-center ">
        {/* tiêu đề */}
        <p className=" text-slate-400 text-xl font-bold mt-4  hover:text-gray-700 rounded-md px-3 py-2  ">
          Users
        </p>
        {/* search */}
       <Search/>
        <div className="w-[80%] my-12 p-4 border border-gray-300 bg-gray-200">
          <DashboardUserHeader />
          {/* content dưới */}
          {allUsers && allUsers.map((user) => (
          <DashboardUserContent
            key={user._id}
            profilePic={user.profilePic}
            username={user.username}
            email={user.email}
            isAdmin={user.isAdmin}
            createdAt={user.createdAt}
            handleDeleteUser= {handleDeleteUser}
            userId = {user._id}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
