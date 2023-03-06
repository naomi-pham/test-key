/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Star from '../icon/Star';

const stars = [1, 2, 3, 4, 5];
const colors = [
	'bg-red-500',
	'bg-orange-500',
	'bg-yellow-500',
	'bg-green-500',
	'bg-brand',
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
				return 'bg-zinc-200';
			}
			if (index <= selectedStar) {
				return colors[selectedStar];
			}
			return 'bg-zinc-200';
		},
		[selectedStar, firstTimeRef],
	);

	const hoverBackgroundColor = useCallback(
		(index) => {
			if (index <= selectedStar) {
				return `group-hover:${colors[selectedStar]}`;
			}
			return '';
		},
		[selectedStar],
	);

	const handleSetStar = (index) => () => {
		firstTimeRef.current = false;
		handleClick(index);
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
		<div className="group flex w-fit items-center">
			{stars.map((arr, index) => {
				return (
					<button
						key={index}
						onClick={handleSetStar(index)}
						onMouseOver={handleMouseOver(index)}
						onMouseOut={handleMouseOut(index)}
						className="pr-1.5 last-of-type:pr-0"
					>
						<div
							className={`hover:before: h-8 w-8 rounded-md ${defaultBackgroundColor(
								index,
							)} duration-75 hover:scale-105 ${hoverBackgroundColor(index)}`}
						>
							<Star className="h-8 w-8 fill-none" />
						</div>
					</button>
				);
			})}
			<p className="ml-2 opacity-80">{message}</p>
		</div>
	);
};

export default Rating;
