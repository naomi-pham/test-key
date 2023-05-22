/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import CozyReviews from '../common/CozyReviews';
import { IconLoading, IconLogo } from '../common/Icons';
import RatingGroupLarge from '../common/RatingGroupLarge';

const ReviewCarousel = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error, isLoading } = useAxios(`${id}`);

	if (error) return <p className="cozy-opacity-60"> Stats not found</p>;
	if (isLoading)
		return (
			<i className="cozy-text-branding-primary-500">
				<IconLoading />
			</i>
		);

	return (
		<div className="cozy-flex cozy-flex-col cozy-items-center cozy-gap-4 sm:cozy-flex-row">
			<div className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3 cozy-self-stretch cozy-p-3 cozy-px-3">
				<RatingGroupLarge
					messageLarge
					rating={handleNullData(data?.data?.trust_score, 0)}
					numberOfReviews={handleNullData(
						data?.data?.review_overview?.total,
						0,
					)}
				/>
				<IconLogo width={100} height={40} />
			</div>

			<div className="cozy-w-full sm:cozy-max-w-sm">
				<CozyReviews id={id} />
			</div>
		</div>
	);
};

export default ReviewCarousel;
