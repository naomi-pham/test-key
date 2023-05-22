/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import { IconLoading, IconLogo } from '../common/Icons';
import RatingGroupSmall from '../common/RatingGroupSmall';

const Horizontal = ({ id }) => {
	const { data, error, isLoading } = useAxios(`${id}`);

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
				<RatingGroupSmall
					rating={handleNullData(data?.data?.trust_score, 0)}
					numberOfReviews={handleNullData(
						data?.data?.review_overview?.total,
						0,
					)}
				/>
				<p className="cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block">
					{handleNullData(data?.data?.review_overview?.total_trust_score, 0)}{' '}
					out of 5
				</p>
			</div>

			<a href="/">
				<i>
					<IconLogo width={50} height={20} />
				</i>
			</a>
		</div>
	);
};

export default Horizontal;
