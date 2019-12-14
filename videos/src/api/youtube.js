import axios from 'axios';

const KEY = 'AIzaSyA05WSBD3_xW2cfp5x6H9fXL3TH__kpYVg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 20,
		type: 'video',
		key: KEY
	}
});