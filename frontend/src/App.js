
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import './input.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './Layouts/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Music from './pages/Musics/Music';
import Premium from './pages/Premium/Premium';
import Contact from './pages/Contact/Contact';
import DashboardUser from './pages/Dashboard/DashboardUser';
import DashboardSong from './pages/Dashboard/DashboardSong';
import DashboardArtist from './pages/Dashboard/DashboardArtist';
import DashboardAlbums from './pages/Dashboard/DashboardAlbums';
import DashboardHome from './pages/Dashboard/DashboardHome';
import DashboardAddSong from './pages/Dashboard/DashboardAddSong';
import SearchPage from './pages/Search/SearchPage';
import Favourite from './pages/MyFavourite/Favourite';


function App() {
  return (
   <>
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/premium' element={<Premium/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        
        <Route path='/dashboard/home' element={<DashboardHome/>}/>
        <Route path='/dashboard/users' element={<DashboardUser/>}/>
        <Route path='/dashboard/songs' element={<DashboardSong/>}/>
        <Route path='/dashboard/artists' element={<DashboardArtist/>}/>
        <Route path='/dashboard/albums' element={<DashboardAlbums/>}/>
        <Route path='/dashboard/add' element={<DashboardAddSong/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </div>
   </>
  
  );
}

export default App;
