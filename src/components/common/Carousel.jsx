/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';
import ReviewCard from './ReviewCard';

const Carousel = ({ slides }) => {
	const ref = useRef(null);
	const totalSlide = slides?.length;
	const [slidePosition, setSlidePosition] = useState(0);
	const [translateX, setTranslateX] = useState(0);

	useLayoutEffect(() => {
		setTranslateX(ref.current.clientWidth * slidePosition);
	}, []);

	function moveToRight() {
		if (slidePosition === totalSlide - 1) {
			setSlidePosition(0);
			setTranslateX(0);
		} else {
			setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
			setTranslateX(ref.current.clientWidth * (slidePosition + 1));
		}
	}

	function moveToLeft() {
		if (slidePosition === 0) {
			setSlidePosition(totalSlide - 1);
			setTranslateX(ref.current.clientWidth * (totalSlide - 1));
		} else {
			setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
			setTranslateX(ref.current.clientWidth * (slidePosition - 1));
		}
	}

	return (
		<div className="relative mx-auto w-full">
			<div className="mx-auto w-10/12 overflow-hidden">
				<div
					className="mx-auto flex transition-transform duration-500 ease-in-out"
					ref={ref}
					style={{
						transform: `translate3d(-${translateX}px, 0px, 0px)`,
					}}
				>
					{slides?.map((item) => (
						<ReviewCard key={item.id} item={item} />
					))}
				</div>
			</div>

			<button
				className="absolute top-0 bottom-0 left-0 h-full disabled:cursor-not-allowed disabled:opacity-40 "
				onClick={moveToLeft}
				disabled={slidePosition === 0}
			>
				<ArrowLeft className="h-5 w-8 fill-black-700" />
			</button>

			<button
				className="absolute top-0 bottom-0 right-0 h-full disabled:cursor-not-allowed disabled:opacity-40 "
				onClick={moveToRight}
				disabled={slidePosition === totalSlide - 1}
			>
				<ArrowRight className="h-5 w-8 fill-black-700" />
			</button>
		</div>
	);
};

export default Carousel;
