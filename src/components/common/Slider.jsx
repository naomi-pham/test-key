/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../icon/Arrow';
import { throttle } from '../../helpers/Helpers.jsx';
import useWindowResize from '../../hooks/useResize';
import ReviewCard from './ReviewCard';

const Slider = ({ slides }) => {
	const totalSlide = slides?.length;
	const [slidePosition, setSlidePosition] = useState(0);
	const [postsPerSlide, setPostsPerSlide] = useState(null);

	const windowSize = useWindowResize();

	useEffect(() => {
		if (windowSize.width < 640) {
			setPostsPerSlide(1);
		} else {
			setPostsPerSlide(2);
		}
	}, [windowSize]);

	async function moveToRight() {
		setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
	}

	async function moveToLeft() {
		setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
	}

	return (
		<div className="cozy-relative cozy-mx-auto cozy-flex cozy-w-full cozy-gap-4">
			<button
				className="cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToLeft(), 200)}
				disabled={slidePosition === 0}
			>
				<ArrowLeft className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>

			<div className="cozy-overflow-hidden">
				<div
					className="cozy-flex cozy-items-center cozy-transition-transform cozy-duration-500 cozy-ease-in-out"
					style={{
						transform: `translateX(-${slidePosition * (100 / postsPerSlide)}%)`,
					}}
				>
					{slides?.map((item) => (
						<ReviewCard
							key={item.id}
							item={item}
							postsPerSlide={postsPerSlide}
							hasBackground
						/>
					))}
				</div>
			</div>

			<button
				className="cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToRight(), 200)}
				disabled={slidePosition === totalSlide - postsPerSlide}
			>
				<ArrowRight className="cozy-h-5 cozy-w-8 cozy-fill-light-neutral-700" />
			</button>
		</div>
	);
};

export default Slider;
