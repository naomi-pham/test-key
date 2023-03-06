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
				className={`flex flex-col ${
					intent === 'center' ? 'items-center justify-center text-center' : ''
				} gap-3 `}
			>
				<h4 className="font-primary text-2xl text-brand">Cozy Cot</h4>

				{error && <p className="opacity-60 "> Rating not found</p>}

				<>
					<RatingGroupLarge
						withoutMessage
						rating={handleNullData(data?.data?.total_trust_score)}
						numberOfReviews={handleNullData(data?.data?.total_review, 0)}
					/>
					<p className="flex gap-1.5">
						Cozy score:
						<span className="font-500">
							{handleNullData(data?.data?.total_trust_score)}
						</span>
						•
						<a href="/" className="underline underline-offset-2">
							{handleNullData(data?.data?.total_review, 0)} reviews
						</a>
					</p>
				</>
			</div>
		</>
	);
};

export default CozyStatsLarge;
