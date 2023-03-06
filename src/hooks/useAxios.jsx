import { useEffect, useState } from 'react';
import axios from '../components/api/axios';

const useAxios = (url) => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getData();
	}, [url]);

	async function getData() {
		try {
			setIsLoading(true);
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}

	return { data, error, isLoading };
};

export default useAxios;
