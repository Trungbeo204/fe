import React, { useEffect, useState } from "react";
import SongContext from "./SongContext";
import songAPI from "../../apis/songAPI";

const SongState = ({ children }) => {
  const [likedSongs, setLikedSongs] = useState([]);
  console.log(likedSongs);
  const [selectedSong, setSelectedSong] = useState(null);
  const [allSong, setAllSong] = useState();
  const [newSongName, setNewSongName] = useState('');
  const [newArtistName, setNewArtistName] = useState('')
  const [isPlaying, setIsPlaying] = useState(false);
  const [songData, setSongData] = useState({
    artist: "",
    name: "",
    album: "",
    category: "",
    language: "",
    image: "",
    song: "",
    artistImg: "",
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("image", file);
      const imageSong = await songAPI.addImage(data);
      console.log(imageSong.data.data);
      setSongData({ ...songData, image: imageSong.data.data });
    } catch (error) {
      console.log(error);
    }
  };
  const handleArtistImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("artistImg", file);
      const imageArtist = await songAPI.addArtistImg(data);
      setSongData({ ...songData, artistImg: imageArtist.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAudioChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("audio", file);
      const imageAudio = await songAPI.addAudio(data);
      setSongData({ ...songData, song: imageAudio.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await songAPI.addSong(songData);

      setSongData({
        artist: "",
        name: "",
        album: "",
        category: "",
        language: "",
        image: "",
        song: "",
        artistImg: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteSong = async (songId) => {
    console.log(songId);
    try {
      const song = await songAPI.deleteSong(`${songId}`);
      setAllSong((prev) => prev.filter((song) => song._id !== songId));
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateSong = async (songId) => {
    try {
      const {
       artist,
        name,
        album,
        category,
        language,
        image,
        song,
        artistImg,
      } = songData;
      const updateSong = await songAPI.updateSong(`${songId}`, {
        artist: newArtistName,
        name :newSongName,
        album,
        category,
        language,
        image,
        song,
        artistImg,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //get all
  useEffect(() => {
    const fetchAllSong = async () => {
      try {
        const response = await songAPI.getAllSong();
        if (response) {
          setAllSong(response.data.data);
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSong();
  }, []);
  const getSongById = async (songId) => {
    try {
      const response = await songAPI.getByIdSong(songId);
      setSelectedSong(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePlayClick = () => {
    setIsPlaying(true);
  };


  const handleLike = async (songId) => {
    try {
      const response = await songAPI.likeSong(songId);
    } catch (error) {
      console.error('Error liking song:', error.message);
    }
  };
  
  return (
    <SongContext.Provider
      value={{
        allSong,
        setAllSong,
        songData,
        setSongData,
        handleImageChange,
        handleAudioChange,
        handleArtistImageChange,
        handleSubmit,
        handleDeleteSong,
        handleUpdateSong,
        newSongName,
        setNewSongName,
        newArtistName,
        setNewArtistName,
        getSongById,
        selectedSong,
        setSelectedSong,
        isPlaying,
        setIsPlaying,
        handlePlayClick,
      
        handleLike,
        likedSongs,
        setLikedSongs

      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongState;
