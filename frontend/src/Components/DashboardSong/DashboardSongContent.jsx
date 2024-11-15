import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "antd";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
const DashboardSongContent = (props) => {
  const {
    image,
    nameSong,
    artist,
    bgColor,
    handleDeleteSong,
    songId,
    handleUpdateSong,
    newSongName,
    setNewSongName,
    newArtistName,
    setNewArtistName,
    getSongById,
    selectedSong,
    handlePlayClick,
    handleLike,
    likedSongs,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  let limitNameSong = nameSong;
  if (nameSong.length > 20) {
    limitNameSong = nameSong.substring(0, 20) + "...";
  }
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleUpdateSongClick = () => {
    handleUpdateSong(songId);
  };
  const handleDeleteClick = () => {
    handleDeleteSong(songId);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    handleLike(songId);
    };
  return (
    <div
      className={`${bgColor} flex flex-col items-center justify-center aspect-square rounded-lg w-60 transition duration-400 hover:bg-white hover:shadow-lg relative`}
    >
      <div className="relative">
        <img className="h-32 w-32 object-cover" src={image} alt="image" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
          <AiFillPlayCircle
            size={48}
            color="#FF6600"
            onClick={() => {
              getSongById(songId);
              handlePlayClick();
            }}
          />
          <div className="absolute bottom-0 right-0 mb-2 mr-2">
            <FaHeart
              size={15}
              className={isLiked ? "text-red-500" : "text-white"}
              onClick={handleLikeClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="pt-2 font-mono text-lg text-center overflow-hidden">
        <p className="truncate w-full">{limitNameSong}</p>
        <p className="truncate w-full">{artist}</p>
      </div>
      <div className="absolute top-0 right-0 p-2">
        <button
          className="text-black-500"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <BsThreeDotsVertical size={15} />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 mt-10 bg-white rounded-lg shadow-md py-2 px-4">
            <button className="block w-full text-left py-2" onClick={showModal}>
              Update
            </button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleUpdateSongClick}
              onCancel={handleCancel}
            >
              {/* update */}
              <form>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="updatedNameSong">
                    Name song:
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    type="text"
                    id="updatedNameSong"
                    value={newSongName}
                    onChange={(e) => setNewSongName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="updatedArtist">
                    Artist:
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    type="text"
                    id="updatedArtist"
                    value={newArtistName}
                    onChange={(e) => setNewArtistName(e.target.value)}
                  />
                </div>
              </form>
            </Modal>
            <button
              className="block w-full text-left py-2"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSongContent;
