import { useEffect, useState } from 'react';
import axios from '../components/api/axios';

const useStats = (id) => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (id) {
			getData();
		}
	}, [id]);

	async function getData() {
		if (!id) return null;
		try {
			setIsLoading(true);
			const res = await axios.get(
				`/api/v1/business/widgets/${id}/stats`,
			);
			setData(res.data.data);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}

	return { data, error, isLoading };
};

export default useStats;
