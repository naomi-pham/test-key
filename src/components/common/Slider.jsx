/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { throttle } from '../../helpers/Helpers.jsx';
import useWindowResize from '../../hooks/useResize';
import { IconArrow } from './Icons';
import ReviewCard from './ReviewCard';

const Slider = ({ slides, website }) => {
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
		<div className="cozy-relative cozy-mx-auto cozy-flex cozy-w-full">
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
							hasBackground
							website={website}
						/>
					))}
				</div>
			</div>

			<button
				className="cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40"
				onClick={throttle(() => moveToRight(), 200)}
				disabled={slidePosition === totalSlide - postsPerSlide}
			>
				<i>
					<IconArrow />
				</i>
			</button>
		</div>
	);
};

export default Slider;
