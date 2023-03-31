import React from 'react';
import RatingGroupLarge from '../common/RatingGroupLarge';
import CozyReviews from '../common/CozyReviews';
import useAxios from '../../hooks/useAxios';
import { handleNullData } from '../../helpers/Helpers';

const ReviewCarousel = () => {
	const { data, error } = useAxios('/api/v1/business/widgets/stats');

	return (
		<div className="cozy-flex cozy-flex-col cozy-items-center cozy-gap-12 sm:cozy-flex-row">
			<div className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3 cozy-self-stretch cozy-p-3 cozy-px-3">
				{error && <p className="cozy-opacity-60"> Stats not found</p>}
				<RatingGroupLarge
					messageLarge
					rating={handleNullData(data?.data?.total_trust_score)}
					numberOfReviews={handleNullData(data?.data?.total_review, 0)}
				/>
				<h3 className="cozy-text-xl cozy-font-graphik-semibold cozy-text-heading-3 cozy-text-branding-primary-500">
					CozyCot
				</h3>
			</div>

			<div className="cozy-mx-auto cozy-w-full cozy-max-w-xs sm:cozy-max-w-sm">
				<CozyReviews />
			</div>
		</div>
	);
};

export default ReviewCarousel;
