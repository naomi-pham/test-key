import React from 'react';
import Slider from '../common/Slider';
import useAxios from '../../hooks/useAxios';

const ReviewSlider = () => {
	const { data, error } = useAxios('/api/v1/business/reviews');

	return (
		<div className="cozy-mx-auto cozy-w-full lg:cozy-max-w-3xl">
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{data && <Slider slides={data?.data?.items} />}
		</div>
	);
};

export default ReviewSlider;
