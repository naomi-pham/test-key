/* eslint-disable react/prop-types */
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Slider from '../common/Slider';
import { IconLoading } from '../common/Icons';

const ReviewSlider = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error, isLoading } = useAxios(`${id}`);

	let filteredReview;

	if (data?.data?.reviews?.length > 0) {
		filteredReview = data?.data?.reviews?.filter((item) => item.reply_id === 0);
	} else {
		filteredReview = data?.data?.reviews;
	}

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{isLoading && (
				<i className="cozy-text-branding-primary-500">
					<IconLoading />
				</i>
			)}
			{data && <Slider slides={filteredReview} />}
		</div>
	);
};

export default ReviewSlider;
