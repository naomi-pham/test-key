/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { handleMessage } from '../../helpers/Helpers';
import { RatingFixed } from './RatingGroupLarge';

const RatingGroupSmall = ({ withoutMessage, rating }) => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		handleMessage(rating, setMessage);
	}, [rating]);

	return (
		<div className="cozy-flex cozy-w-full cozy-items-center cozy-gap-2 md:cozy-w-auto">
			{!withoutMessage && (
				<p className="cozy-hidden cozy-font-medium cozy-text-light-neutral-800 md:cozy-block">
					{message}
				</p>
			)}
			<div className="cozy-flex cozy-gap-1">
				<RatingFixed rating={rating} small />
			</div>
		</div>
	);
};

export default RatingGroupSmall;
