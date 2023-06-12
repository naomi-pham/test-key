/* eslint-disable react/prop-types */
import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';
import { IconLogo } from '../common/Icons';

const MicroStar = ({ id }) => {
	return (
		<div className="cozy-flex cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4">
			<CozyStatsSmall id={id} />
			<div>
				<a
					href={`https://cozycot.just.engineer/profile/${id}?utm_source=Widget`}
					target="_blank"
					rel="noreferrer"
				>
					<i>
						<IconLogo width={60} height={24} />
					</i>
				</a>
			</div>
		</div>
	);
};

export default MicroStar;
