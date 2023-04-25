/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import React from 'react';
import RatingGroupSmall from './RatingGroupSmall';
import relativeTime from 'dayjs/plugin/relativeTime';
import Check from '../icon/Check';
import { handleNullData } from '../../helpers/Helpers';
dayjs.extend(relativeTime);

const ReviewCard = ({ item, postsPerSlide, hasBackground }) => {
	return (
		<div
			className="cozy-relative cozy-px-2"
			style={{ minWidth: `calc(100% / ${postsPerSlide})` }}
		>
			<div
				className={`${
					hasBackground ? 'cozy-rounded-xl cozy-bg-light-neutral-100' : ''
				}`}
			>
				<div className="cozy-flex cozy-flex-col cozy-gap-3 cozy-p-4">
					<div className="cozy-flex cozy-flex-wrap cozy-gap-3 sm:cozy-items-center">
						<RatingGroupSmall
							withoutMessage
							rating={handleNullData(item?.star)}
						/>
						{item?.created_by?.is_verified && (
							<div className="cozy-flex cozy-gap-0.5 cozy-opacity-60">
								<Check className="cozy-h-5 cozy-w-5" />
								<p className="cozy-text-body-2">Verified</p>
							</div>
						)}
					</div>
					<a href="/">
						<h4 className="cozy-font-graphik-medium cozy-text-title-2 cozy-text-light-neutral-800 cozy-line-clamp-2">
							{handleNullData(item?.title)}
						</h4>
					</a>
					<p className="cozy-line-clamp-5">{handleNullData(item?.content)}</p>
					<div className="cozy-flex cozy-items-end cozy-gap-2 cozy-font-graphik cozy-text-light-neutral-700 cozy-text-body-2">
						<p className="cozy-font-graphik-medium">
							{handleNullData(item?.created_by)},
						</p>
						<p className="cozy-opacity-80">
							{dayjs(item?.created_at).fromNow()}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
