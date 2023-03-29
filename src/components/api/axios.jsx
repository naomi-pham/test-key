import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log('🚀 ~ file: axios.jsx:4 ~ BASE_URL:', BASE_URL);

export default axios.create({
	baseURL: BASE_URL,
});

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status === 404) {
			console.log(404);
		}
		console.log(error);
		return Promise.reject(error);
	},
);
