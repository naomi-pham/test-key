import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import styles from './index.css';

(() => {
	const container = document.getElementsByClassName('root');

	for (let i = 0; i < container.length; i++) {
		let intent = container[i].dataset.review;
		if (!container[i].classList.contains('root-rendered')) {
			let renderIn = container[i].attachShadow({ mode: 'open' });
			container[i].classList.add('root-rendered');

			let styleTag = document.createElement('style');
			styleTag.id = 'cozy-widget-style';
			styleTag.innerHTML = styles;
			renderIn.appendChild(styleTag);

			const rootContent = createRoot(renderIn);

			rootContent.render(
				<React.StrictMode>
					<App intent={intent} />
				</React.StrictMode>,
			);
		}
	}
})();
