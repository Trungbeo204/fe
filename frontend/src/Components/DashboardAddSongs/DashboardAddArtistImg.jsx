import React, { useContext, useState } from 'react'
import { SlCloudUpload } from "react-icons/sl";
import SongContext from '../../Context/SongContext/SongContext';
const DashboardAddArtistImg = ({handleArtistImageChange}) => {
    const { songData } = useContext(SongContext);
  return (
    <div className="flex justify-center items-center w-48 h-48 border-2 border-dashed border-gray-300 rounded-md">
    <label
      htmlFor="imageArtist-input"
      className="upload-label flex flex-col items-center cursor-pointer"
    >
         {songData.artistImg ? (
          <img className='w-48 h-48 object-contain    ' alt="artist" src={songData.artistImg} />
        ) : (
         <>
          <span className="upload-text text-lg mb-2">
            <SlCloudUpload />
          </span>
        <span className="upload-text text-lg mb-2">Upload Artist Image</span>
         </>
        )}
      
      <input
        id="imageArtist-input"
        type="file"
        accept="image/*"
        onChange={handleArtistImageChange}
        className="hidden"
      />
    </label>
  </div>
  )
}

export default DashboardAddArtistImg