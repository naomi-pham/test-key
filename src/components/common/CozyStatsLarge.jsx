/* eslint-disable react/prop-types */
import React from 'react';
import RatingGroupLarge from './RatingGroupLarge';
import useAxios from '../../hooks/useAxios';
import { handleNullData } from '../../helpers/Helpers';

const CozyStatsLarge = ({ intent }) => {
	const { data, error } = useAxios('/api/v1/business/widgets/stats');

	return (
		<>
			<div
				className={`cozy-flex cozy-flex-col  cozy-gap-3 ${
					intent === 'center'
						? 'cozy-items-center cozy-justify-center cozy-text-center'
						: ''
				} cozy-p-3 `}
			>
				<h4 className="cozy-font-primary cozy-text-2xl cozy-text-branding-primary-500">
					CozyCot
				</h4>

				{error && <p className="cozy-opacity-60 "> Rating not found</p>}

				<>
					<RatingGroupLarge
						withoutMessage
						rating={handleNullData(data?.data?.total_trust_score)}
						numberOfReviews={handleNullData(data?.data?.total_review, 0)}
					/>
					<p className="cozy-flex cozy-gap-1.5">
						Cozy score:
						<span className="cozy-font-graphik-medium">
							{handleNullData(data?.data?.total_trust_score)}
						</span>
						•
						<a href="/" className="cozy-underline cozy-underline-offset-2">
							{handleNullData(data?.data?.total_review, 0)} reviews
						</a>
					</p>
				</>
			</div>
		</>
	);
};

export default CozyStatsLarge;
