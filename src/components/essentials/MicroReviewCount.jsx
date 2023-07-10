/* eslint-disable react/prop-types */
import React from 'react';
import { IconLogo } from '../common/Icons';

const CLIENT_URL = import.meta.env.VITE_PUBLIC_CLIENT_URL;

const MicroReviewCount = ({ website }) => {
	return (
		<p
			className="cozy-flex cozy-justify-center cozy-gap-2 cozy-font-medium cozy-text-light-neutral-800"
			style={{ alignItems: 'end' }}
		>
			See our reviews on
			<span style={{ marginBottom: -2 }}>
				<a
					href={`${CLIENT_URL}/profile/${website}?utm_source=Widget`}
					target="_blank"
					rel="noreferrer"
				>
					<i>
						<IconLogo width={60} height={24} />
					</i>
				</a>
			</span>
		</p>
	);
};

export default MicroReviewCount;
