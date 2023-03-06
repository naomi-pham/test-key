/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import { colors, handleMessage, stars } from '../../helpers/Helpers';
import Star from '../icon/Star';

const RatingGroupLarge = ({
	withoutMessage,
	messageLarge,
	rating,
	numberOfReviews,
}) => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		handleMessage(rating, setMessage);
	}, [rating]);

	return (
		<>
			{!withoutMessage && (
				<p className={`${messageLarge ? 'text-xl' : ''} font-500`}>{message}</p>
			)}
			<div className="flex gap-1.5">
				<RatingFixed rating={rating} />
			</div>
			{messageLarge && (
				<a href="/" className="text-sm underline underline-offset-2">
					{numberOfReviews} reviews
				</a>
			)}
		</>
	);
};

export const RatingFixed = ({ rating, small }) => {
	const [selectedStar, setSelectedStar] = useState(0);

	useEffect(() => {
		setSelectedStar(rating);
	}, [rating]);

	const defaultBackgroundColor = useCallback(
		(index) => {
			if (index < selectedStar) {
				return colors[Math.round(selectedStar) - 1];
			}
			return 'bg-zinc-200';
		},
		[selectedStar],
	);

	return (
		<>
			{stars.map((arr, index) => {
				return (
					<button key={index}>
						<div
							className={`rounded-md ${defaultBackgroundColor(
								index,
							)} duration-75 hover:scale-105`}
						>
							<Star className={`${small ? 'h-5 w-5' : 'h-8 w-8'} fill-none`} />
						</div>
					</button>
				);
			})}
		</>
	);
};

export default RatingGroupLarge;
