import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';

const Horizontal = () => {
	return (
		<div className="cozy-flex cozy-w-full cozy-flex-wrap cozy-items-center cozy-p-2 cozy-py-4">
			<CozyStatsSmall withScore />

			<a
				href="/"
				className="cozy-font-primary cozy-font-extrabold cozy-text-branding-primary-500"
			>
				CozyCot
			</a>
		</div>
	);
};

export default Horizontal;
