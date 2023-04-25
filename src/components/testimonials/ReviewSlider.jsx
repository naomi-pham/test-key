/* eslint-disable react/prop-types */
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Slider from '../common/Slider';

const ReviewSlider = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error } = useAxios(`${id}`);

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{data && <Slider slides={data?.data?.reviews} />}
		</div>
	);
};

export default ReviewSlider;
