import React from 'react';
import CozyStatsSmall from '../common/CozyStatsSmall';
import { IconLogo } from '../common/Icons';

const MicroStar = ({ id }) => {
	return (
		<div className="cozy-flex cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4">
			<CozyStatsSmall id={id} />
			<div>
				<a href="/">
					<i>
						<IconLogo width={50} height={20} />
					</i>
				</a>
			</div>
		</div>
	);
};

export default MicroStar;
