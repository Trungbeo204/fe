import React, { useState } from "react";
import UserContext from "./UserContext";
import authAPI from "../../apis/authAPI";
import { useNavigate } from "react-router-dom";


const UserState = ({ children }) => {

const [allUsers, setAllUsers] = useState()
const [totalUsers, setTotalUsers] = useState(0);


const handleDeleteUser = async(userId) => {
  try {
    const user = await authAPI.deleteUser(userId);
    setAllUsers((prev)=> prev.filter((user) => user._id !== userId))
  } catch (error) {
    console.log(error);
  }
}

//search
//search
const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);
const navigate = useNavigate();
const handleKeyPress = async (event) => {
  if (event.key === "Enter") {
    try {
      const response = await authAPI.searchUser(searchTerm);
      console.log(response);
      setSearchResults(response.data);
      navigate('/search');
    } catch (error) {
      console.log(error);
    }
    setSearchTerm("");
  }
};

// const search = async() => {
//  try {
//     const response =  await authAPI.searchUser(searchTerm)
//     console.log(response);
//     setSearchResults(response.data);
    
//  } catch (error) {
//   console.log(error);
//   throw error;
//  }
// };
  return (
    <UserContext.Provider
      value={{
       allUsers,
       setAllUsers,
       totalUsers,
       setTotalUsers,
       handleDeleteUser,
       searchTerm,
       setSearchTerm,
       searchResults,
       setSearchResults,
       handleKeyPress,
      //  search

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
