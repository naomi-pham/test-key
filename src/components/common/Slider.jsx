/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';
import ReviewCard from './ReviewCard';

const Slider = ({ slides }) => {
	const ref = useRef(null);

	const handleClick = (direction) => () => {
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
		<div className="cozy-group cozy-relative cozy-mx-auto cozy-flex cozy-w-full cozy-max-w-3xl cozy-items-center cozy-gap-6">
			<button
				className="cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-opacity-0 cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-20 group-hover:cozy-opacity-50"
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
				className="cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-opacity-0 cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-20 group-hover:cozy-opacity-50"
				onClick={handleClick('right')}
			>
				<ArrowRight className="cozy-h-5 cozy-w-5" />
			</button>
		</div>
	);
};

export default Slider;
