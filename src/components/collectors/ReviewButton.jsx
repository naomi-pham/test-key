import React from 'react';

const ReviewButton = () => {
	return (
		<div className="cozy-rounded-md cozy-p-3 cozy-text-center cozy-ring-1 cozy-ring-brand hover:cozy-cursor-pointer hover:cozy-bg-rose-200 hover:cozy-shadow-sm">
			<a href="/" className="cozy-text-dark cozy-duration-150">
				<span>Review us on</span>{' '}
				<span className="cozy-font-primary cozy-text-brand">Cozy Cot</span>
			</a>
		</div>
	);
};

export default ReviewButton;
