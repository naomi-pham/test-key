import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';

const MicroStar = () => {
	return (
		<div className="cozy-flex cozy-items-center cozy-p-2 cozy-py-4">
			<CozyStatsSmall />
			<a
				href="/"
				className="cozy-font-primary cozy-font-extrabold cozy-text-branding-primary-500"
			>
				CozyCot
			</a>
		</div>
	);
};

export default MicroStar;
