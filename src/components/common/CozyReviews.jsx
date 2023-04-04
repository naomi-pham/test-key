import React from 'react';
import Carousel from '../common/Carousel';
import useAxios from '../../hooks/useAxios';

const CozyReviews = () => {
	const { data, error } = useAxios('/api/v1/business/reviews');

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{data && <Carousel slides={data?.data?.items} />}
		</div>
	);
};

export default CozyReviews;
