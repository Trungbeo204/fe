import React from "react";
import Dashboard from "./Dashboard";
import Search from "../../Components/Search/Search";
import DashboardArtistContent from "../../Components/DashboardArtist/DashboardArtistContent";
import DashboardAlbumsContent from "../../Components/DashboardAlbums/DashboardAlbumsContent";

const DashboardAlbums = () => {
  return (
    <>
      <Dashboard />
      <div className="w-full flex flex-col items-center justify-center ">
        {/* tiêu đề */}
        <p className=" text-slate-400 text-xl font-bold mt-4  hover:text-gray-700 rounded-md px-3 py-2  ">
          Albums
        </p>

        {/* search */}
        <div className="flex items-center">
          <Search />
        </div>
        <div className="  grid grid-cols-4 gap-12 w-[75%] my-12 p-4 border border-gray-300 bg-gray-200 ">
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/41/9b/a1/419ba18abd636ccc7f19ebdb53bafd81.jpg"
            album="Xe thể thao"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/0e/f1/2f/0ef12fb72057dc5c62ed3f85727ea5fd.jpg"
            album="Xe địa hình"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/1e/0a/70/1e0a70f00de5600450d6c493612a0ded.jpg"
            album="Xe đua"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/ef/9e/ee/ef9eeec6da31bd4afcd3b6d06e0badad.jpg"
            album="Xe du lịch"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/22/19/f6/2219f64b0dc8cc2386efff9247b55a39.jpg"
            album="Xe đạp đôi"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/35/d3/08/35d30848d77d7fc8c86b8df48af3b7ab.jpg"
            album="Xe đạp điện"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/35/d3/08/35d30848d77d7fc8c86b8df48af3b7ab.jpg"
            album="Xe đạp điện"
          />
          <DashboardAlbumsContent
            image="https://i.pinimg.com/236x/35/d3/08/35d30848d77d7fc8c86b8df48af3b7ab.jpg"
            album="Xe đạp điện"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardAlbums;
