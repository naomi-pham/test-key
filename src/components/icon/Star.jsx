/* eslint-disable react/prop-types */
import React from 'react';

const Star = ({ size = 28 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 4L11.3471 8.1459H15.7063L12.1796 10.7082L13.5267 14.8541L10 12.2918L6.47329 14.8541L7.82037 10.7082L4.29366 8.1459H8.65292L10 4Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Star;
