import React, { useContext } from 'react'
import Dashboard from './Dashboard'
import Search from '../../Components/Search/Search'
import DashboardArtistContent from '../../Components/DashboardArtist/DashboardArtistContent'
import SongContext from '../../Context/SongContext/SongContext'
const DashboardArtist = () => {
  const {allSong} = useContext(SongContext)
  return (
    <>
    <Dashboard/>
   <div className="w-full flex flex-col items-center justify-center ">
       {/* tiêu đề */}
       <p className=" text-slate-400 text-xl font-bold mt-4  hover:text-gray-700 rounded-md px-3 py-2  ">
         Artists
        </p>
        

        {/* search */}
        <div className="flex items-center">
        
         <Search/>
        </div>
          <div className="  grid grid-cols-4 gap-12 w-[75%] my-12 p-4 border border-gray-300 bg-gray-200 ">
            {
              allSong?.map((artist)=> (
                <DashboardArtistContent
                key = {artist._id}
                image = {artist.artistImg}
                artist= {artist.artist}
                />
              ))
            }
         
            
        
      </div>

   </div>
   
   </>
  )
}

export default DashboardArtist