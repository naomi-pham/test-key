/* eslint-disable react/prop-types */
import React from 'react';
import useReview from '../../hooks/useReview';
import Carousel from '../common/Carousel';

const CozyReviews = ({ id, website }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data: reviews, error } = useReview(`${id}`);

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{reviews && (
				<Carousel slides={reviews?.items} id={id} website={website} />
			)}
		</div>
	);
};

export default CozyReviews;
