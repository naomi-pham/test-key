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
				<p
					className={`${
						messageLarge ? 'cozy-text-heading-3' : ''
					} text-light-neutral-800 cozy-font-medium`}
				>
					{message}
				</p>
			)}
			<div className="cozy-flex cozy-gap-1.5">
				<RatingFixed rating={rating} />
			</div>
			{messageLarge && (
				<a
					href="/"
					className="cozy-text-body-2 cozy-underline cozy-underline-offset-2"
				>
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
			if (index <= selectedStar) {
				return colors[Math.round(selectedStar) - 1];
			}

			return 'cozy-bg-zinc-200';
		},
		[selectedStar],
	);

	return (
		<>
			{stars.map((arr, index) => {
				return (
					<button key={index}>
						<div
							className={`${defaultBackgroundColor(
								index,
							)} cozy-duration-75 hover:cozy-scale-105`}
							style={{ color: 'white', borderRadius: small ? '2px' : '4px' }}
						>
							<i>
								<Star size={small ? 20 : 28} />
							</i>
						</div>
					</button>
				);
			})}
		</>
	);
};

export default RatingGroupLarge;
