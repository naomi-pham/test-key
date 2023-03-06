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
		<div className="group relative mx-auto w-full max-w-3xl">
			<button
				className={`absolute top-1/2 bottom-0 left-0 h-full w-8 -translate-y-1/2 cursor-pointer opacity-0 transition-all duration-200 hover:scale-125 disabled:cursor-not-allowed disabled:opacity-20 group-hover:opacity-50 sm:-left-8 ${
					!isMoved ? 'hidden' : ''
				}`}
				onClick={handleClick('left')}
			>
				<ArrowLeft className="h-5 w-5" />
			</button>

			<div
				ref={ref}
				className="scrollbar-hide flex items-center overflow-x-scroll"
			>
				{slides?.map((item) => (
					<ReviewCard key={item.id} item={item} responsive />
				))}
			</div>

			<button
				className="absolute top-1/2 bottom-0 right-0 h-full w-8 -translate-y-1/2 cursor-pointer opacity-0 transition-all duration-200 hover:scale-125 disabled:cursor-not-allowed disabled:opacity-20 group-hover:opacity-50 sm:-right-8"
				onClick={handleClick('right')}
			>
				<ArrowRight className="h-5 w-5" />
			</button>
		</div>
	);
};

export default Slider;
