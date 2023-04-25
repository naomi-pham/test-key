/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import RatingGroupLarge from './RatingGroupLarge';

const CozyStatsLarge = ({ intent, id }) => {
	console.log("🚀 ~ file: CozyStatsLarge.jsx:8 ~ CozyStatsLarge ~ id:", id)
	// Get values from query string
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error } = useAxios(`${id}`);

	return (
		<>
			<div
				className={`cozy-flex cozy-flex-col  cozy-gap-3 ${
					intent === 'center'
						? 'cozy-items-center cozy-justify-center cozy-text-center'
						: ''
				} cozy-p-3 `}
			>
				<h4 className="cozy-text-2xl cozy-font-graphik-semibold cozy-text-heading-3 cozy-text-branding-primary-500">
					CozyCot
				</h4>

				{error && <p className="cozy-opacity-60 "> Rating not found</p>}

				<>
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
							<span className="cozy-font-graphik-medium">
								{handleNullData(data?.data?.trust_score)}
							</span>
						</p>
						•
						<a href="/" className="cozy-underline cozy-underline-offset-2">
							<span className="cozy-font-graphik-medium">
								{handleNullData(data?.data?.review_overview.total, 0)}
							</span>{' '}
							reviews
						</a>
					</div>
				</>
			</div>
		</>
	);
};

export default CozyStatsLarge;
