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
			className={`relative min-w-full ${responsive ? 'sm:min-w-[50%]' : ''}`}
		>
			<a href="/" className="absolute inset-0 h-full w-full" />
			<div
				className={`flex flex-col gap-2 p-4 ${
					responsive ? 'mx-auto w-11/12 rounded-md sm:bg-light' : ''
				}`}
			>
				<div className="flex gap-3">
					<RatingGroupSmall
						withoutMessage
						rating={handleNullData(item.star)}
					/>
					{item?.created_by.is_verified && (
						<div className="flex gap-0.5 opacity-60">
							<Check className="h-5 w-5" />
							<p>Verified</p>
						</div>
					)}
				</div>
				<h4 className="font-500 text-lg">{handleNullData(item.title)}</h4>
				<p>{handleNullData(item.content)}</p>
				<div className="flex items-end gap-2">
					<p className="font-500">
						{handleNullData(item.created_by.name)},{' '}
						<span className="text-sm opacity-60">
							{dayjs(item?.created_at).fromNow()}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
