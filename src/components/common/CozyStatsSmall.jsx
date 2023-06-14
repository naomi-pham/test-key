/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useStats from '../../hooks/useStats';
import RatingGroupSmall from './RatingGroupSmall';
import { IconLoading } from './Icons';

const CozyStatsSmall = ({ withScore, website }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data: stats, error, isLoading } = useStats(`${website}`);

	return (
		<>
			{error && <p className="cozy-opacity-60"> Stats not found</p>}
			{isLoading && (
				<i className="cozy-text-branding-primary-500">
					<IconLoading />
				</i>
			)}
			{stats && (
				<div className="cozy-flex cozy-flex-wrap cozy-items-center cozy-gap-2">
					<RatingGroupSmall
						rating={handleNullData(stats?.cozy_score, 0)}
						numberOfReviews={handleNullData(stats?.review_overview?.total, 0)}
					/>
					{withScore && (
						<p className="cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block">
							{handleNullData(stats?.data?.review_overview?.cozy_score, 0)} out
							of 5
						</p>
					)}
				</div>
			)}
		</>
	);
};

export default CozyStatsSmall;
