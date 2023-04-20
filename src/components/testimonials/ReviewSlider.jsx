import React from 'react';
import Slider from '../common/Slider';
import useAxios from '../../hooks/useAxios';

const ReviewSlider = () => {
	const { data, error } = useAxios(
		'/api/v1/business/reviews/f61dab47-3b6a-40cb-9a79-1f799edbbc3c',
	);

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{data && <Slider slides={data?.data?.items} />}
		</div>
	);
};

export default ReviewSlider;
