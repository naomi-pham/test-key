import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
// import styles from './index.css';

(() => {
	const container = document.getElementsByClassName('root');

	for (let i = 0; i < container.length; i++) {
		let intent = container[i].dataset.review;
		if (!container[i].classList.contains('root-rendered')) {
			let shadowDom = container[i].attachShadow({ mode: 'open' });
			container[i].classList.add('root-rendered');

			// if (!document.getElementById('cozy-widget-style')) {
			// 	let styleTag = document.createElement('style');
			// 	styleTag.setAttribute('id', 'cozy-widget-style');
			// 	styleTag.innerHTML = styles;
			// 	shadowDom.appendChild(styleTag);
			// }

			const rootContent = createRoot(shadowDom);

			rootContent.render(
				<React.StrictMode>
					<App intent={intent} />
				</React.StrictMode>,
			);
		}
	}
})();
