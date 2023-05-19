import React from 'react';
import { IconLogo } from '../common/Icons';

const ReviewButton = () => {
	return (
		<button
			className="cozy-flex cozy-items-center cozy-justify-center cozy-gap-2 cozy-border-2 cozy-border-branding-primary-400 cozy-p-2 cozy-text-center cozy-text-body-1 cozy-text-light-neutral-800 cozy-duration-150 hover:cozy-cursor-pointer hover:cozy-bg-branding-primary-100 hover:cozy-shadow-sm focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
			style={{ borderRadius: '8px', alignItems: "end" }}
		>
			<span>Review us on</span>
			<i>
				<IconLogo width={50} height={20} />
			</i>
		</button>
	);
};

/* 
	className=""

*/

export default ReviewButton;
