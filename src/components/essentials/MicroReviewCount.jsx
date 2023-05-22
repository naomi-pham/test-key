import React from 'react';
import { IconLogo } from '../common/Icons';

const MicroReviewCount = () => {
	return (
		<p
			className="cozy-flex cozy-justify-center cozy-gap-2 cozy-font-medium cozy-text-light-neutral-800"
			style={{ alignItems: 'end' }}
		>
			See our reviews on
			<span>
				<i>
					<IconLogo width={50} height={20} />
				</i>
			</span>
		</p>
	);
};

export default MicroReviewCount;
