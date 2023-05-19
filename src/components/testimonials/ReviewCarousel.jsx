/* eslint-disable react/prop-types */
import React from 'react';
import { handleNullData } from '../../helpers/Helpers';
import useAxios from '../../hooks/useAxios';
import CozyReviews from '../common/CozyReviews';
import RatingGroupLarge from '../common/RatingGroupLarge';
import { IconLogo } from '../common/Icons';

const ReviewCarousel = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error } = useAxios(`${id}`);

	return (
		<div className="cozy-flex cozy-flex-col cozy-items-center cozy-gap-4 sm:cozy-flex-row">
			<div className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3 cozy-self-stretch cozy-p-3 cozy-px-3">
				{error && <p className="cozy-opacity-60"> Stats not found</p>}
				<RatingGroupLarge
					messageLarge
					rating={handleNullData(data?.data?.trust_score, 0)}
					numberOfReviews={handleNullData(
						data?.data?.review_overview?.total,
						0,
					)}
				/>

				<i>
					<IconLogo width={100} height={40} />
				</i>
			</div>

			<div className="cozy-w-full sm:cozy-max-w-sm">
				<CozyReviews id={id} />
			</div>
		</div>
	);
};

export default ReviewCarousel;
