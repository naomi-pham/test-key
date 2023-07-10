/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useStats from '../../hooks/useStats';
import RatingGroupLarge from './RatingGroupLarge';
import { IconLoading, IconLogo } from './Icons';

const CLIENT_URL = import.meta.env.VITE_PUBLIC_CLIENT_URL;

const CozyStatsLarge = ({ intent, website }) => {
	const { data: stats, error, isLoading } = useStats(`${website}`);

	return (
		<>
			{error && <p className="cozy-opacity-60 "> Rating not found</p>}
			{isLoading && (
				<i className="cozy-text-branding-primary-500">
					<IconLoading />
				</i>
			)}

			{stats && (
				<div
					className={`cozy-flex cozy-flex-col cozy-gap-3 cozy-p-3 ${
						intent === 'center'
							? 'cozy-items-center cozy-justify-center cozy-text-center'
							: ''
					}`}
				>
					<i style={{ marginBottom: -4 }}>
						<IconLogo width={100} height={40} />
					</i>
					<RatingGroupLarge
						withoutMessage
						rating={handleNullData(stats?.cozy_score)}
						numberOfReviews={handleNullData(stats?.review_overview.total, 0)}
						website={website}
					/>
					<div className="cozy-flex cozy-gap-1.5 cozy-text-body-2">
						<p>
							Cozy score:{' '}
							<span className="cozy-font-medium">
								{handleNullData(stats?.cozy_score?.toFixed(1))}
							</span>
						</p>
						•
						<a
							href={`${CLIENT_URL}/profile/${website}?utm_source=Widget`}
							target="_blank"
							rel="noreferrer"
							className="cozy-underline cozy-underline-offset-2"
						>
							<span className="cozy-font-medium">
								{handleNullData(stats?.review_overview.total, 0)}
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
