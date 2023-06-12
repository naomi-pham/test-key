/* eslint-disable react/prop-types */
import React from 'react';
import { handleMessage } from '../../helpers/Helpers';
import StarRatingGroup from './StarRatingGroup';

const RatingGroupSmall = ({ withoutMessage, rating }) => {
	return (
		<div className="cozy-flex cozy-w-full cozy-items-center cozy-gap-2 md:cozy-w-auto">
			{!withoutMessage && (
				<p className="cozy-hidden cozy-font-medium cozy-text-light-neutral-800 md:cozy-block">
					{handleMessage(rating)}
				</p>
			)}
			<div className="cozy-flex cozy-gap-1">
				<StarRatingGroup star={rating} spacing={4} />
			</div>
		</div>
	);
};

export default RatingGroupSmall;
