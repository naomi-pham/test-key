/* eslint-disable react/prop-types */
import React from 'react';
import CozyReviews from '../common/CozyReviews';
import CozyStatsLarge from '../common/CozyStatsLarge';

const MiniCarousel = ({ id, website }) => {
	return (
		<div className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3">
			<CozyStatsLarge intent="center" id={id} website={website} />
			<div className="cozy-mx-auto cozy-w-full lg:cozy-max-w-3xl">
				<CozyReviews id={id} website={website} />
			</div>
		</div>
	);
};

export default MiniCarousel;
