/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { throttle } from '../../helpers/Helpers.jsx';
import { IconArrow } from './Icons.jsx';
import ReviewCard from './ReviewCard';

const Carousel = ({ slides, id, website }) => {
	const totalSlide = slides?.length;
	const [slidePosition, setSlidePosition] = useState(0);
	const [postsPerSlide] = useState(1);

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
				style={{ transform: 'rotate(180deg)' }}
				onClick={throttle(() => moveToLeft(), 200)}
				disabled={slidePosition === 0}
			>
				<i>
					<IconArrow />
				</i>
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
							id={id}
							website={website}
						/>
					))}
				</div>
			</div>

			<button
				className="cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToRight(), 200)}
				disabled={slidePosition === Math.ceil(totalSlide / postsPerSlide) - 1}
			>
				<i>
					<IconArrow />
				</i>
			</button>
		</div>
	);
};

export default Carousel;
