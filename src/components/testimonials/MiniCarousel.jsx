import React from 'react';
import CozyReviews from '../common/CozyReviews';
import CozyStatsLarge from '../common/CozyStatsLarge';

const MiniCarousel = () => {
	return (
		<div className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3">
			<CozyStatsLarge intent="center" />
			<div className="cozy-mx-auto cozy-w-full lg:cozy-max-w-3xl">
				<CozyReviews />
			</div>
		</div>
	);
};

export default MiniCarousel;
