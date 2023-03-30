import React from 'react';

const ReviewButton = () => {
	return (
		<div className="cozy-rounded-md cozy-border-2 cozy-border-brand cozy-p-3 cozy-text-center hover:cozy-cursor-pointer hover:cozy-bg-rose-200 hover:cozy-shadow-sm">
			<a href="/" className="cozy-text-dark cozy-duration-150">
				<span>Review us on</span>{' '}
				<span className="cozy-font-primary cozy-font-extrabold cozy-text-brand">
					CozyCot
				</span>
			</a>
		</div>
	);
};

export default ReviewButton;
