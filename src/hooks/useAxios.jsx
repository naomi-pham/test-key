import { useEffect, useState } from 'react';
import axios from '../components/api/axios';

const useAxios = (businessUuid) => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (businessUuid) {
			getData();
		}
	}, [businessUuid]);

	async function getData() {
		try {
			setIsLoading(true);
			const res = await axios.get(
				`/api/v1/business/widgets/${businessUuid}/stats`,
			);
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
