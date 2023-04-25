/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import RatingGroupSmall from './RatingGroupSmall';

const CozyStatsSmall = ({ withScore, id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data } = useAxios(`${id}`);

	return (
		<div className="cozy-flex cozy-flex-wrap cozy-items-center cozy-gap-2">
			<RatingGroupSmall
				rating={handleNullData(data?.data?.trust_score, 0)}
				numberOfReviews={handleNullData(data?.data?.review_overview?.total, 0)}
			/>
			{withScore && (
				<p className="cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block">
					{handleNullData(data?.data?.review_overview?.total_trust_score, 0)}{' '}
					out of 5
				</p>
			)}
		</div>
	);
};

export default CozyStatsSmall;
