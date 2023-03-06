import React from 'react';

const ReviewButton = () => {
	return (
		<div className="rounded-md p-3 text-center ring-1 ring-brand hover:cursor-pointer hover:bg-rose-200 hover:shadow-sm">
			<a href="/" className="text-dark duration-150">
				<span>Review us on</span>{' '}
				<span className="font-primary text-brand">Cozy Cot</span>
			</a>
		</div>
	);
};

export default ReviewButton;
