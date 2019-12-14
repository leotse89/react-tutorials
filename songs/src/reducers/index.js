import {combineReducers} from 'redux';

const songsReducer = () => {
	return [
		{title: 'Xanny', duration: '4:26'},
		{title: 'History', duration: '3:28'}
	];
};

const selectedSongReducer = (selectedSong=null, action) => {
	if(action.type === 'SONG_SELECTED'){
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});