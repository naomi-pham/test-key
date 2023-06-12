/* eslint-disable react/prop-types */
import React from 'react';
import useReview from '../../hooks/useReview';
import { IconLoading } from '../common/Icons';
import Slider from '../common/Slider';

const ReviewSlider = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data: reviews, error, isLoading } = useReview(`${id}`);

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{isLoading && (
				<i className="cozy-text-branding-primary-500">
					<IconLoading />
				</i>
			)}
			{reviews && <Slider slides={reviews?.items} />}
		</div>
	);
};

export default ReviewSlider;
