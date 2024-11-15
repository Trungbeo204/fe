import React, { useContext } from 'react';
import { SlCloudUpload } from "react-icons/sl";
import SongContext from '../../Context/SongContext/SongContext';

const DashboardAddImage = ({ handleImageChange }) => {
  const { songData } = useContext(SongContext);

  return (
    <div className="flex justify-center items-center w-48 h-48 border-2 border-dashed border-gray-300 rounded-md">
      <label
        htmlFor="image-input"
        className="upload-label flex flex-col items-center cursor-pointer"
      >
        {songData.image ? (
          <img className='w-48 h-48 object-contain    ' alt="" src={songData.image} />
        ) : (
         <>
          <span className="upload-text text-lg mb-2">
            <SlCloudUpload />
          </span>
        <span className="upload-text text-lg mb-2">Upload Image</span>
         </>
        )}
        <input
          id="image-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default DashboardAddImage;