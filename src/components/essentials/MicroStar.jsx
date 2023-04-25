import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';

const MicroStar = ({ id }) => {
	return (
		<div className="cozy-flex cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4">
			<CozyStatsSmall id={id} />
			<div>
				<a
					href="/"
					className="cozy-font-graphik-semibold cozy-text-body-1 cozy-font-extrabold cozy-text-branding-primary-500"
				>
					CozyCot
				</a>
			</div>
		</div>
	);
};

export default MicroStar;
