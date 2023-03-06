import React from 'react';

const Star = ({ ...props }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="20" height="20" rx="4"  />
			<path
				d="M10 4L11.3471 8.1459H15.7063L12.1796 10.7082L13.5267 14.8541L10 12.2918L6.47329 14.8541L7.82037 10.7082L4.29366 8.1459H8.65292L10 4Z"
				fill="#FEF8FA"
			/>
		</svg>
	);
};

export default Star;
