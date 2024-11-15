import React from 'react'
import { GoTrash } from "react-icons/go";
const DashboardAlbumsContent = (props) => {
    const { image, album, bgColor } = props;
    return (
      <div
        className={`${bgColor} flex flex-col items-center justify-center aspect-square rounded-lg w-60 transition duration-400 hover:bg-white hover:shadow-lg relative`}
      >
        <img className="h-32 w-32 object-cover" src={image} alt="image" />
        <div className="pt-2 font-mono text-lg text-center overflow-hidden">
         
          <p className="truncate w-full mt-2">{album}</p>
        </div>
        <div className="absolute bottom-0 left-0 p-2">
          <GoTrash size={15} className="text-red-500" />
        </div>
      </div>
    );
  };

export default DashboardAlbumsContent