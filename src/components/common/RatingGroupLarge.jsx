/* eslint-disable react/prop-types */
import React from 'react';
import { handleMessage } from '../../helpers/Helpers';
import StarRatingGroup from './StarRatingGroup';

const RatingGroupLarge = ({
	withoutMessage,
	messageLarge,
	rating,
	numberOfReviews,
	id,
	website
}) => {
	return (
		<>
			{!withoutMessage && (
				<p
					className={`${
						messageLarge ? 'cozy-text-heading-3' : ''
					} text-light-neutral-800 cozy-font-medium`}
				>
					{handleMessage(rating)}
				</p>
			)}
			<StarRatingGroup star={rating} size={28} spacing={6} />
			{messageLarge && (
				<a
					href={`https://cozycot.just.engineer/profile/${website}?utm_source=Widget`}
					target="_blank"
					rel="noreferrer"
					className="cozy-text-body-2 cozy-underline cozy-underline-offset-2"
				>
					{numberOfReviews} reviews
				</a>
			)}
		</>
	);
};

export default RatingGroupLarge;
