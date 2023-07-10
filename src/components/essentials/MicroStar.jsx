/* eslint-disable react/prop-types */
import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';
import { IconLogo } from '../common/Icons';

const CLIENT_URL = import.meta.env.VITE_PUBLIC_CLIENT_URL;

const MicroStar = ({ website, id }) => {
	return (
		<div className="cozy-flex cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4">
			<CozyStatsSmall id={id} website={website} />
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

export default MicroStar;
