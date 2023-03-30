/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import RatingGroupSmall from './RatingGroupSmall';

const CozyStatsSmall = ({ withScore }) => {
	const { data } = useAxios('/api/v1/business/widgets/stats');

	return (
		<div className="cozy-flex cozy-flex-wrap cozy-items-center cozy-p-2">
			<RatingGroupSmall
				rating={handleNullData(data?.data?.total_trust_score, 0)}
				numberOfReviews={handleNullData(data?.data?.total_review, 0)}
			/>
			{withScore && (
				<p className="cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-dark md:cozy-block">
					{handleNullData(data?.data?.total_trust_score, 0)} out of 5
				</p>
			)}
		</div>
	);
};

export default CozyStatsSmall;
