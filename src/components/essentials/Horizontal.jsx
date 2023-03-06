import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';

const Horizontal = () => {
	return (
		<div className="flex w-full flex-wrap items-center gap-2 py-4">
			<CozyStatsSmall withScore />
			<a href="/" className="font-primary text-brand">
				Cozy Cot
			</a>
		</div>
	);
};

export default Horizontal;
