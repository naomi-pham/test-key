/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import ReviewCard from './ReviewCard';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';

const Slider = ({ slides }) => {
	const ref = useRef(null);
	const [isMoved, setIsMoved] = useState(false);

	const handleClick = (direction) => () => {
		setIsMoved(true);

		if (ref.current) {
			const { scrollLeft, clientWidth } = ref.current;

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<div className="cozy-group cozy-relative cozy-mx-auto cozy-w-full cozy-max-w-3xl">
			<button
				className={`cozy-absolute cozy-top-1/2 cozy-left-0 cozy-bottom-0 cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-opacity-0 cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-20 group-hover:cozy-opacity-50 sm:-cozy-left-8 ${
					!isMoved ? 'cozy-hidden' : ''
				}`}
				onClick={handleClick('left')}
			>
				<ArrowLeft className="cozy-h-5 cozy-w-5" />
			</button>

			<div
				ref={ref}
				className="cozy-flex cozy-items-start cozy-overflow-x-hidden"
			>
				{slides?.map((item) => (
					<ReviewCard key={item.id} item={item} responsive />
				))}
			</div>

			<button
				className="cozy-absolute cozy-top-1/2 cozy-right-0 cozy-bottom-0 cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-opacity-0 cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-20 group-hover:cozy-opacity-50 sm:-cozy-right-8"
				onClick={handleClick('right')}
			>
				<ArrowRight className="cozy-h-5 cozy-w-5" />
			</button>
		</div>
	);
};

export default Slider;
