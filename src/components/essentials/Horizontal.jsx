/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useStats from '../../hooks/useStats';
import { IconLoading, IconLogo } from '../common/Icons';
import StarRatingGroup from '../common/StarRatingGroup';

const CLIENT_URL = import.meta.env.VITE_PUBLIC_CLIENT_URL;

const Horizontal = ({ website }) => {
	const { data: stats, error, isLoading } = useStats(`${website}`);

	if (error) return <p className="cozy-opacity-60"> Stats not found</p>;

	if (isLoading)
		return (
			<i className="cozy-text-branding-primary-500">
				<IconLoading />
			</i>
		);

	return (
		<div className="cozy-flex cozy-w-full cozy-flex-wrap cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4">
			<div className="cozy-flex cozy-flex-wrap cozy-items-center cozy-gap-2">
				<StarRatingGroup star={stats?.cozy_score} spacing={4} />
				<p className="cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block">
					{handleNullData(stats?.cozy_score.toFixed(1), 0)} out of 5
				</p>
			</div>

			<a
				href={`${CLIENT_URL}/profile/${website}?utm_source=Widget`}
				target="_blank"
				rel="noreferrer"
				style={{ marginBottom: -4 }}
			>
				<i>
					<IconLogo width={60} height={24} />
				</i>
			</a>
		</div>
	);
};

export default Horizontal;
