/* eslint-disable react/prop-types */
import React from 'react';
import Widgets from './components/data/WidgetName';

const App = ({ intent }) => {
	return (
		<>
			{Widgets.filter((widget) => widget.intent === intent).map((widget) => (
				<div key={widget.id} className="w-full">
					{widget.component}
				</div>
			))}
		</>
	);
};

export default App;
