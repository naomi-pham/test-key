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
		<div className="flex w-full items-center gap-2 md:w-auto">
			{!withoutMessage && <p className="hidden font-500 md:block">{message}</p>}
			<div className="flex gap-1">
				<RatingFixed rating={rating} small />
			</div>
		</div>
	);
};

export default RatingGroupSmall;
