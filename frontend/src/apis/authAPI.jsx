import axiosInstance from "./axiosInstance";

const authAPI = {
    login:(values) => axiosInstance.post("/auth/login",values),
    register:(values)=> axiosInstance.post("/auth/register",values),
    authInfo:(values) => axiosInstance.get("/auth/me",values),
    getAllUsers:()=> axiosInstance.get("/user"),
    editUser:(userId,values) => axiosInstance.put(`/user/profile/${userId}`,values),
    deleteUser:(userId) => axiosInstance.put(`/user/delete/${userId}`),
    uploadAvatar:(values) => axiosInstance.post("/auth/avatar",values),
    searchUser: (term) => axiosInstance.get('/user/search', { params: { term } }),
}

export default authAPI