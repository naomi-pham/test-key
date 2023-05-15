/* eslint-disable react/prop-types */
import React, { useCallback, useRef, useState } from 'react';
import { colors, stars } from '../../helpers/Helpers';
import Star from '../icon/Star';

const Rating = ({ handleClick }) => {
	const [selectedStar, setSelectedStar] = useState(null);
	const firstTimeRef = useRef(true);

	const defaultBackgroundColor = useCallback(
		(index) => {
			if (firstTimeRef.current) {
				return 'cozy-bg-white cozy-text-light-neutral-300';
			}
			if (index <= selectedStar) {
				return colors[selectedStar];
			}

			return 'cozy-bg-white cozy-text-light-neutral-300';
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
		firstTimeRef.current = false;
		handleClick(index);
		setSelectedStar(index);
	};

	const handleMouseOver = (index) => () => {
		firstTimeRef.current = false;
		setSelectedStar(index);
	};

	const handleMouseOut = (index) => () => {
		firstTimeRef.current = false;
		setSelectedStar(index);
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
							className={`cozy-h-10 cozy-w-10 cozy-rounded-[2px] cozy-border ${defaultBackgroundColor(
								index,
							)} cozy-duration-75 hover:cozy-scale-105 ${hoverBackgroundColor(
								index,
							)}`}
						>
							<i className="">
								<Star />
							</i>
						</div>
					</button>
				);
			})}
		</div>
	);
};

export default Rating;
