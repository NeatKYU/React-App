import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "부기맨", duration: "4:05" },
    { title: "Very Good", duration: "2:30" },
    { title: "okey dokey", duration: "3:15" },
    { title: "Shall We Dance", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})
