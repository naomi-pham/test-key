/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';
import ReviewCard from './ReviewCard';

const Slider = ({ slides }) => {
	const ref = useRef(null);
	const [slidePosition, setSlidePosition] = useState(0);
	const totalSlides = slides.length;

	const handleClick = (direction) => () => {
		if (ref.current) {
			const { scrollLeft, clientWidth } = ref.current;

			if (direction === 'left') {
				setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
			} else {
				setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
			}

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<div className="cozy-relative cozy-mx-auto cozy-flex cozy-w-full cozy-max-w-3xl cozy-items-center cozy-gap-6">
			<button
				className="cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={handleClick('left')}
				disabled={slidePosition === 0}
			>
				<ArrowLeft className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
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
				className="cozy-hidden cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40 sm:cozy-block"
				onClick={handleClick('right')}
				disabled={slidePosition === totalSlides / 2 - 1}
			>
				<ArrowRight className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>

			<button
				className="sm:hidden cozy-h-full cozy-w-8 -cozy-translate-y-1/2 cozy-cursor-pointer cozy-transition-all cozy-duration-200 hover:cozy-scale-125 disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={handleClick('right')}
				disabled={slidePosition === totalSlides - 1}
			>
				<ArrowRight className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>
		</div>
	);
};

export default Slider;
