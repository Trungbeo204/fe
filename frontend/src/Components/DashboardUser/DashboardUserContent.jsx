import React, { useContext, useState } from "react";
import moment from 'moment';
import { CiTrash } from "react-icons/ci";
const DashboardUserContent = (props) => {
  const { profilePic,username,email,createdAt,isAdmin,handleDeleteUser,userId } = props;
  const [selectedRole, setSelectedRole] = useState(isAdmin ? "admin" : "member");

  const handleRoleChange = (event) => {
    if (selectedRole === "admin" && isAdmin) {
      setSelectedRole(event.target.value);
    }
  };
  const handleDeleteUserClick = () =>{
    handleDeleteUser(userId)
  }
const date = moment(createdAt).format('DD/MM/YYYY');

  return (
    <>
      {/* content dưới */}
      <div className="flex flex-col sm:flex-row items-center justify-evenly border border-t-0 rounded-lg transition duration-400 hover:bg-white hover:shadow-lg">
       <button className="text-xl" onClick={handleDeleteUserClick}>
       <CiTrash />
       </button>
        <img
          src={profilePic}
          alt=""
          className="max-w-10 max-h-20 sm:w-1/6 mb-4 sm:mb-0  p-4 object-contain"
        />
        <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">{username}</p>
        <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">
         {email}
        </p>
        <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">chưa</p>
        <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">{date}</p>
        <p className="w-full sm:w-1/6 text-center mb-2 sm:mb-0">
          <button
            className={`w-20 mr-3 h-10 border border-emerald-900 rounded-lg  font-semibold ${
              selectedRole === "admin" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSelectedRole("admin")}
          >
            Admin
          </button>
          <button
            className={`w-20 mr-3 h-10 border border-emerald-900 rounded-lg  font-semibold ${
              selectedRole === "member" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSelectedRole("member")}
          >
            Member
          </button>
        </p>
      </div>
    </>
  );
};

export default DashboardUserContent;