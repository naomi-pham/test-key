/* eslint-disable react/prop-types */
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Carousel from '../common/Carousel';

const CozyReviews = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error } = useAxios(`${id}`);

	let filteredReview;

	if (data?.data?.reviews?.length > 0) {
		filteredReview = data?.data?.reviews?.filter((item) => item.reply_id === 0);
	} else {
		filteredReview = data?.data?.reviews;
	}

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{data && <Carousel slides={filteredReview} />}
		</div>
	);
};

export default CozyReviews;
