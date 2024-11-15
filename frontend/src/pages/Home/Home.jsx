import React, { useContext } from "react";
import SongContext from "../../Context/SongContext/SongContext";
import { BiSolidCategory } from "react-icons/bi";
import { TbCoins } from "react-icons/tb";
import { Navigate, useNavigate } from "react-router-dom";
import AuthenContext from "../../Context/AuthenContext/AuthenContext";

const Home = () => {
  const { allSong } = useContext(SongContext);
  const {
    auth: { isAuthenticated },
  } = useContext(AuthenContext);
  const navigate = useNavigate();

  const handleRent = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
  };

  return (
    <div className="flex gap-10 p-24">
      {allSong?.map((item) => (
        <>
          <div className="w-[18vw] hover:shadow-slate-900 hover:shadow-lg rounded-2xl h-[365px]  items-center align-middle text-center">
            <img
              src={item.artistImg}
              className="h-[50%] w-full object-cover rounded-2xl"
              alt="artistImg"
            />
            <h5 className="font-bold text-[20px]">{item.name}</h5>
            <div className="h-[90px] text-left px-[20%]">
              <p className="flex gap-[10px] items-center">
                <BiSolidCategory />
                <span>{item.artist}</span>
              </p>
              <p className="flex gap-[10px] items-center">
                {" "}
                <TbCoins /> <span>{item.language} đ / giờ</span>
              </p>
            </div>
            <button
              onClick={handleRent}
              className="w-[60%] px-5 py-3 rounded-xl border border-solid border-[#FF3300] hover:bg-[#FF0033] text-white bg-[#FF6600]"
            >
              Thuê
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
