/* eslint-disable react/prop-types */
import React from 'react';
import { useCallback } from 'react';
import { colors, stars } from '../../helpers/Helpers';
import Star from '../icon/Star';


const StarRatingGroup = ({ star, size = 20, spacing = 8 }) => {
	// console.log("🚀 ~ file: StarRatingGroup.jsx:9 ~ StarRatingGroup ~ star:", star)
	const defaultBackgroundColor = useCallback(
		(index) => {
			if (index < Math.round(star)) {
				return colors[Math.round(star) - 1];
			}
			return 'cozy-bg-zinc-200 cozy-text-light-neutral-25';
		},
		[star],
	);

	return (
		<div className="cozy-flex" style={{ gap: spacing }}>
			{stars.map((star, index) => (
				<div
					key={star}
					className={`cozy-flex w-fit cozy-items-center cozy-justify-center cozy-rounded-sm cozy-p-1 ${defaultBackgroundColor(
						index,
					)}`}
				>
					<Star fill="white" size={size} />
				</div>
			))}
		</div>
	);
};

export default StarRatingGroup;
