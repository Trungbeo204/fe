import React, { useContext } from 'react';
import Search from '../../Components/Search/Search';
import UserContext from '../../Context/UserContext/UserContext';

const SearchPage = () => {
  const { searchResults } = useContext(UserContext);
  console.log(searchResults);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-center">
        <Search />
      </div>

      {searchResults && searchResults.searchUsers && (
        <div>
          <h2>Users:</h2>
          {searchResults.searchUsers.length > 0 ? (
            <ul>
              {searchResults.searchUsers.map((user) => (
                <li key={user._id}>
                  <img className="h-32 w-32 object-cover" src={user.profilePic} alt={user.username} />
                 Name: {user.username}
                </li>
              ))}
            </ul>
          ) : (
            <p>No available</p>
          )}
        </div>
      )}
      {searchResults && searchResults.searchSongs && (
        <div>
          <h2>Song</h2>
          {searchResults.searchSongs.length > 0 ? (
            <ul>
              {searchResults.searchSongs.map((song) => (
                <li key={song._id}>
                  <img className="h-32 w-32 object-cover" src={song.image} alt={song.name} />
                 Songname: {song.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No available</p>
          )}
        </div>
      )}

    </div>
  );
};

export default SearchPage;