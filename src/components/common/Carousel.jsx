/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';
import { throttle } from '../../helpers/Helpers.jsx';
import ReviewCard from './ReviewCard';
import { useEffect } from 'react';
import useWindowResize from '../../hooks/useResize';

const Carousel = ({ slides }) => {
	const totalSlide = slides?.length;
	const windowSize = useWindowResize();
	const [slidePosition, setSlidePosition] = useState(0);
	const [postsPerSlide, setPostsPerSlide] = useState(1);

	// useEffect(() => {
	// 	if (windowSize.width > 1024) {
	// 		setPostsPerSlide(2);
	// 	} else {
	// 		setPostsPerSlide(1);
	// 	}
	// }, [windowSize]);

	async function moveToRight() {
		if (slidePosition === totalSlide - postsPerSlide) {
			setSlidePosition(0);
		} else {
			setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
		}
	}

	async function moveToLeft() {
		if (slidePosition === 0) {
			setSlidePosition(totalSlide - postsPerSlide);
		} else {
			setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
		}
	}

	return (
		<div className="cozy-relative cozy-flex">
			<button
				className="cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToLeft(), 200)}
				disabled={slidePosition === 0}
			>
				<ArrowLeft className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>

			<div className="cozy-overflow-hidden">
				<div
					className="cozy-flex cozy-transition-transform cozy-duration-500 cozy-ease-in-out"
					style={{
						transform: `translateX(-${slidePosition * (100 / postsPerSlide)}%)`,
					}}
				>
					{slides?.map((item) => (
						<ReviewCard
							key={item.id}
							item={item}
							postsPerSlide={postsPerSlide}
						/>
					))}
				</div>
			</div>

			<button
				className="cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToRight(), 200)}
				disabled={slidePosition === Math.ceil(totalSlide / postsPerSlide) - 1}
			>
				<ArrowRight className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>
		</div>
	);
};

export default Carousel;
