/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import RatingGroupLarge from './RatingGroupLarge';
import { IconLoading, IconLogo } from './Icons';

const CozyStatsLarge = ({ intent, id }) => {
	// Get values from query string
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error, isLoading } = useAxios(`${id}`);

	return (
		<>
			{error && <p className="cozy-opacity-60 "> Rating not found</p>}
			{isLoading && (
				<i className="cozy-text-branding-primary-500">
					<IconLoading />
				</i>
			)}

			{data && (
				<div
					className={`cozy-flex cozy-flex-col cozy-gap-3 cozy-p-3 ${
						intent === 'center'
							? 'cozy-items-center cozy-justify-center cozy-text-center'
							: ''
					}`}
				>
					<i>
						<IconLogo width={100} height={40} />
					</i>
					<RatingGroupLarge
						withoutMessage
						rating={handleNullData(data?.data?.trust_score)}
						numberOfReviews={handleNullData(
							data?.data?.review_overview.total,
							0,
						)}
					/>
					<div className="cozy-flex cozy-gap-1.5 cozy-text-body-2">
						<p>
							Cozy score:{' '}
							<span className="cozy-font-medium">
								{handleNullData(data?.data?.trust_score)}
							</span>
						</p>
						•
						<a href="/" className="cozy-underline cozy-underline-offset-2">
							<span className="cozy-font-medium">
								{handleNullData(data?.data?.review_overview.total, 0)}
							</span>{' '}
							reviews
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default CozyStatsLarge;
