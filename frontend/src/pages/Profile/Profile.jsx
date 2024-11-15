import React, { useContext, useState } from "react";
import AuthenContext from "../../Context/AuthenContext/AuthenContext";
import { LuPencil } from "react-icons/lu";
import { Modal } from "antd";
import authAPI from "../../apis/authAPI";
const Profile = () => {
  const { auth,setAuth } = useContext(AuthenContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const [newAvatarUrl, setNewAvatarUrl] = useState("");

const userId = auth.user._id
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setNewUsername(auth.user.username);
  };
  const showModal = () => {
    setIsModalOpen(true);
    setNewUsername(auth.user.username);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleUpdate = async () => {
    try {
       const res =await authAPI.editUser(`${userId}`, { username: newUsername });
      const updatedUser = { ...auth.user, username: newUsername };
      setAuth({ ...auth, user: updatedUser });
  
      handleCancel();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadAvatar = async(e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("avatar", file);
      const avatar = await authAPI.uploadAvatar(data)
      console.log('avatar', avatar);
      setAuth({...auth , profilePic: avatar.data.userInfo})
    window.location.reload();
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[80%] p-4 bg-rose-200">
        <div className="flex flex-row">
          {/* ảnh */}
          <div className="relative w-40 h-40">
            <img
              src={auth.user.profilePic}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
            />
            <input
              id="Avatar"
              type="file"
              accept="image/*"
              onChange={handleUploadAvatar}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

            {/* cột hiện tên */}
            <div className="ml-4 ">
              <h2 className="text-2xl text-white text-center border bg-neutral-800">
                <div className="flex items-center">
                  <span>{auth.user.username}</span>
                  <span className="ml-2" onClick={handleMenuToggle}>
                    <LuPencil />
                  </span>
                  {isMenuOpen && (
                    <div className="absolute ml-60  bg-white rounded-lg shadow-md ">
                      <button className="block text-black " onClick={showModal}>
                        Update
                      </button>
                      <Modal
                        title="Basic Modal"
                        open={isModalOpen}
                        onOk={handleUpdate}
                        onCancel={handleCancel}
                      >
                        {/* update */}
                        <form>
                          <div className="mb-4">
                            <label
                              className="block mb-2"
                              htmlFor="updatedName"
                            >
                              Name
                            </label>
                            <input
                              className="w-full border border-gray-300 rounded-md p-2"
                              type="text"
                              id="updatedName"
                              value={newUsername}
                              onChange={(e) => setNewUsername(e.target.value)}
                            />
                          </div>
                        </form>
                      </Modal>
                    </div>
                  )}
                </div>
              </h2>
              <h2 className="mt-2 text-xl text-white text-center border bg-neutral-800">
                {auth.user.email}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
