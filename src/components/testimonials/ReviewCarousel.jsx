import React from 'react';
import RatingGroupLarge from '../common/RatingGroupLarge';
import CozyReviews from '../common/CozyReviews';
import useAxios from '../../hooks/useAxios';
import { handleNullData } from '../../helpers/Helpers';

const ReviewCarousel = () => {
	const { data, error } = useAxios('/api/v1/business/widgets/stats');

	return (
		<div className="flex flex-col items-center gap-16 sm:flex-row">
			<div className="flex flex-col items-center justify-center gap-3 self-stretch px-3">
				{error && <p className="opacity-60"> Stats not found</p>}
				<RatingGroupLarge
					messageLarge
					rating={handleNullData(data?.data?.total_trust_score)}
					numberOfReviews={handleNullData(data?.data?.total_review, 0)}
				/>
				<h3 className="font-primary text-xl text-brand">Cozy Cot</h3>
			</div>

			<div className="mx-auto w-full max-w-xs sm:max-w-sm">
				<CozyReviews />
			</div>
		</div>
	);
};

export default ReviewCarousel;
