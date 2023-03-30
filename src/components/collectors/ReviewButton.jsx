import React from 'react';

const ReviewButton = () => {
	return (
		<div className="cozy-rounded-xl cozy-border-2 cozy-border-branding-primary-500 cozy-p-4 cozy-text-center cozy-text-body-1 hover:cozy-cursor-pointer hover:cozy-bg-branding-primary-100 hover:cozy-shadow-sm focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2">
			<a href="/" className="cozy-text-light-neutral-800 cozy-duration-150">
				<span>Review us on</span>{' '}
				<span className="cozy-font-graphik-semibold cozy-text-body-1 cozy-text-branding-primary-500">
					CozyCot
				</span>
			</a>
		</div>
	);
};

export default ReviewButton;
