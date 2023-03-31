/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import React from 'react';
import RatingGroupSmall from './RatingGroupSmall';
import relativeTime from 'dayjs/plugin/relativeTime';
import Check from '../icon/Check';
import { handleNullData } from '../../helpers/Helpers';
dayjs.extend(relativeTime);

const ReviewCard = ({ item, responsive }) => {
	return (
		<div
			className={`cozy-relative cozy-min-w-full ${
				responsive ? 'md:cozy-min-w-[50%]' : ''
			}`}
		>
			<div
				className={`${
					responsive
						? 'cozy-mx-auto cozy-w-11/12 cozy-rounded-md cozy-bg-light-neutral-100'
						: ''
				}`}
			>
				<a>
					<div className="cozy-flex cozy-flex-col cozy-gap-3 cozy-p-4">
						<div className="cozy-flex cozy-items-center cozy-gap-3">
							<RatingGroupSmall
								withoutMessage
								rating={handleNullData(item.star)}
							/>
							{item?.created_by.is_verified && (
								<div className="cozy-flex cozy-gap-0.5 cozy-opacity-60">
									<Check className="cozy-h-5 cozy-w-5" />
									<p>Verified</p>
								</div>
							)}
						</div>
						<h4 className="cozy-font-graphik-medium cozy-text-title-2 cozy-text-light-neutral-800">
							{handleNullData(item.title)}
						</h4>
						<p>{handleNullData(item.content)}</p>
						<div className="cozy-flex cozy-items-end cozy-gap-2">
							<p className="cozy-font-graphik">
								{handleNullData(item.created_by.name)},{' '}
								<span className="cozy-text-body-1 cozy-opacity-60">
									{dayjs(item?.created_at).fromNow()}
								</span>
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default ReviewCard;
