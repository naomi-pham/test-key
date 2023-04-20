/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import RatingGroupSmall from './RatingGroupSmall';

const CozyStatsSmall = ({ withScore }) => {
	const { data, error } = useAxios(
		`/api/v1/business/widgets/bf5a1b1d-13be-4d6c-a7d2-66deebf55555/stats`,
	);

	return (
		<div className="cozy-flex cozy-flex-wrap cozy-items-center cozy-gap-2">
			<RatingGroupSmall
				rating={handleNullData(data?.data?.total_trust_score, 0)}
				numberOfReviews={handleNullData(data?.data?.total_review, 0)}
			/>
			{withScore && (
				<p className="cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block">
					{handleNullData(data?.data?.total_trust_score, 0)} out of 5
				</p>
			)}
		</div>
	);
};

export default CozyStatsSmall;
