import React, { useContext } from 'react';
import { SlCloudUpload } from 'react-icons/sl';
import SongContext from '../../Context/SongContext/SongContext';

const DashboardAddAudio = ({ handleAudioChange }) => {
  const { songData } = useContext(SongContext);

  return (
    <div className="flex justify-center items-center w-48 h-48 border-2 border-dashed border-gray-300 rounded-md">
      <label
        htmlFor="audio-input"
        className="upload-label flex flex-col items-center cursor-pointer"
      >
        {songData.song ? (
          <audio controls className='w-48 h-10 object-cover' >
            <source src={songData.song} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          
        ) : (
          <>
            <span className="upload-text text-lg mb-2">
              <SlCloudUpload />
            </span>
            <span className="upload-text text-lg mb-2">Upload Audio</span>
          </>
        )}

        <input
          id="audio-input"
          type="file"
          accept="audio/*"
          onChange={handleAudioChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default DashboardAddAudio;