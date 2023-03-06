import React from 'react';
import Evaluate from '../collectors/Evaluate';
import ReviewButton from '../collectors/ReviewButton';
import Horizontal from '../essentials/Horizontal';
import MicroReviewCount from '../essentials/MicroReviewCount';
import MicroStar from '../essentials/MicroStar';
import Mini from '../essentials/Mini';
import MiniCarousel from '../testimonials/MiniCarousel';
import ReviewCarousel from '../testimonials/ReviewCarousel';
import ReviewSlider from '../testimonials/ReviewSlider';

const ReviewData = [
	{
		id: 1,
		intent: 'evaluate',
		component: <Evaluate />,
	},
	{
		id: 2,
		intent: 'review-button',
		component: <ReviewButton />,
	},
	{
		id: 3,
		intent: 'horizontal',
		component: <Horizontal />,
	},
	{
		id: 4,
		intent: 'micro-review-count',
		component: <MicroReviewCount />,
	},
	{
		id: 5,
		intent: 'micro-star',
		component: <MicroStar />,
	},
	{
		id: 6,
		intent: 'mini',
		component: <Mini />,
	},
	{
		id: 7,
		intent: 'review-carousel',
		component: <ReviewCarousel />,
	},
	{
		id: 8,
		intent: 'mini-carousel',
		component: <MiniCarousel />,
	},
	{
		id: 9,
		intent: 'review-slider',
		component: <ReviewSlider />,
	},
];

export default ReviewData;
