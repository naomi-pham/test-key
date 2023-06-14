import { useEffect, useState } from 'react';
import axios from '../components/api/axios';

const useStats = (website) => {
	const [data, setData] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (website) {
			getData();
		}
	}, [website]);

	async function getData() {
		if (!website) return null;
		try {
			setIsLoading(true);
			const res = await axios.get(
				`/api/v1/business/widgets/${website}/stats`,
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
