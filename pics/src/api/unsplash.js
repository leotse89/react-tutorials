import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 44d3ad5bceb1bd62cd3bb5e54d759e6f4c2cb7bd04073127b98a09b1c41276c0'
	}
});