/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Star from '../icon/Star';

const stars = [1, 2, 3, 4, 5];
const colors = [
	'cozy-bg-red-500',
	'cozy-bg-orange-500',
	'cozy-bg-yellow-500',
	'cozy-bg-green-500',
	'cozy-bg-branding-primary-500',
];

const Rating = ({ rating, handleClick, message }) => {
	const [selectedStar, setSelectedStar] = useState(0);
	const firstTimeRef = useRef(true);

	useEffect(() => {
		setSelectedStar(rating);
	}, [rating]);

	const defaultBackgroundColor = useCallback(
		(index) => {
			if (firstTimeRef.current) {
				return 'cozy-bg-zinc-200';
			}
			if (index <= selectedStar) {
				return colors[selectedStar];
			}
			return 'cozy-bg-zinc-200';
		},
		[selectedStar, firstTimeRef],
	);

	const hoverBackgroundColor = useCallback(
		(index) => {
			if (index <= selectedStar) {
				return `cozy-group-hover:${colors[selectedStar]}`;
			}
			return '';
		},
		[selectedStar],
	);

	const handleSetStar = (index) => () => {
		console.log("🚀 ~ file: Rating.jsx:47 ~ handleSetStar ~ index:", index)
		firstTimeRef.current = false;
		handleClick(index + 1);
	};

	const handleMouseOver = (index) => () => {
		firstTimeRef.current = false;
		setSelectedStar(index);
	};

	const handleMouseOut = (rating) => () => {
		firstTimeRef.current = false;
		setSelectedStar(rating);
	};

	return (
		<div className="cozy-group cozy-flex cozy-w-fit cozy-items-center cozy-gap-2">
			{stars.map((arr, index) => {
				return (
					<button
						key={index}
						onClick={handleSetStar(index)}
						onMouseOver={handleMouseOver(index)}
						onMouseOut={handleMouseOut(index)}
						className="cozy-cozy-pr-1.5 last-of-type:cozy-pr-0"
					>
						<div
							className={`cozy-h-8 cozy-w-8 cozy-rounded-md ${defaultBackgroundColor(
								index,
							)} cozy-duration-75 hover:cozy-scale-105 ${hoverBackgroundColor(
								index,
							)}`}
						>
							<Star className="cozy-h-8 cozy-w-8 cozy-fill-none" />
						</div>
					</button>
				);
			})}
			<p className="cozy-ml-2 cozy-opacity-80">{message}</p>
		</div>
	);
};

export default Rating;
