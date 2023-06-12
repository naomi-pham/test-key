import { useEffect, useState } from 'react';
import axios from '../components/api/axios';

const useReview = (id) => {
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
				`/api/v1/business/reviews/${id}?type=review&limit=10`,
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

export default useReview;
