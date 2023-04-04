/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';
import { throttle } from '../../helpers/Helpers.jsx';
import ReviewCardMultiple from './ReviewCardMultiple';

const Slider = ({ slides }) => {
	const ref = useRef(null);
	const totalSlide = slides?.length;
	const [slidePosition, setSlidePosition] = useState(0);
	const [translateX, setTranslateX] = useState(0);
	const [postsPerSlide, setPostsPerSlide] = useState(2);
	const [windowSize, setWindowSize] = useState({ width: undefined });

	useEffect(() => {
		function handleResize() {
			setWindowSize({ width: window.innerWidth });
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		setTranslateX(ref.current.clientWidth * slidePosition);
	}, []);

	useEffect(() => {
		if (windowSize.width < 640) {
			setPostsPerSlide(1);
		} else {
			setPostsPerSlide(2);
		}
	}, [windowSize]);

	async function moveToRight() {
		if (slidePosition === totalSlide - postsPerSlide) {
			setSlidePosition(0);
			setTranslateX(0);
		} else {
			setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
			setTranslateX(ref.current.clientWidth * (slidePosition + 1));
		}
	}

	async function moveToLeft() {
		if (slidePosition === 0) {
			setSlidePosition(totalSlide - postsPerSlide);
			setTranslateX(ref.current.clientWidth * (totalSlide - postsPerSlide));
		} else {
			setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
			setTranslateX(ref.current.clientWidth * (slidePosition - 1));
		}
	}

	return (
		<div className="cozy-relative cozy-mx-auto cozy-w-full">
			<div className="cozy-mx-auto cozy-w-10/12 cozy-overflow-hidden">
				<div
					className="cozy-mx-auto cozy-flex cozy-items-center cozy-transition-transform cozy-duration-500 cozy-ease-in-out"
					ref={ref}
					style={{
						transform: `translate3d(-${translateX}px, 0px, 0px)`,
					}}
				>
					{slides?.map((item) => (
						<ReviewCardMultiple key={item.id} item={item} />
					))}
				</div>
			</div>

			<button
				className="cozy-absolute cozy-left-0 cozy-bottom-0 cozy-top-0 cozy-h-full disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToLeft(), 200)}
				disabled={slidePosition === 0}
			>
				<ArrowLeft className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>

			<button
				className="cozy-absolute cozy-right-0 cozy-bottom-0 cozy-top-0 cozy-h-full disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToRight(), 200)}
				disabled={slidePosition === Math.ceil(totalSlide / postsPerSlide) - 1}
			>
				<ArrowRight className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>
		</div>
	);
};

export default Slider;
