/* eslint-disable react/prop-types */
import React from 'react';
import Evaluate from './components/collectors/Evaluate';
import ReviewButton from './components/collectors/ReviewButton';
import Horizontal from './components/essentials/Horizontal';
import MicroReviewCount from './components/essentials/MicroReviewCount';
import MicroStar from './components/essentials/MicroStar';
import Mini from './components/essentials/Mini';
import MiniCarousel from './components/testimonials/MiniCarousel';
import ReviewCarousel from './components/testimonials/ReviewCarousel';
import ReviewSlider from './components/testimonials/ReviewSlider';

const App = ({ intent, id }) => {
	const ReviewData = [
		{
			id: 1,
			intent: 'evaluate',
			component: <Evaluate id={id} />,
		},
		{
			id: 2,
			intent: 'review-button',
			component: <ReviewButton id={id} />,
		},
		{
			id: 3,
			intent: 'horizontal',
			component: <Horizontal id={id} />,
		},
		{
			id: 4,
			intent: 'micro-review-count',
			component: <MicroReviewCount id={id} />,
		},
		{
			id: 5,
			intent: 'micro-star',
			component: <MicroStar id={id} />,
		},
		{
			id: 6,
			intent: 'mini',
			component: <Mini id={id} />,
		},
		{
			id: 7,
			intent: 'review-carousel',
			component: <ReviewCarousel id={id} />,
		},
		{
			id: 8,
			intent: 'mini-carousel',
			component: <MiniCarousel id={id} />,
		},
		{
			id: 9,
			intent: 'review-slider',
			component: <ReviewSlider id={id} />,
		},
	];

	return (
		<>
			{ReviewData.filter((widget) => widget.intent === intent).map((widget) => (
				<div key={widget.id} className="cozy-w-full">
					{widget.component}
				</div>
			))}
		</>
	);
};

export default App;
