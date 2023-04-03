export const stars = [1, 2, 3, 4, 5];

export const colors = [
	'cozy-bg-red-500',
	'cozy-bg-orange-500',
	'cozy-bg-yellow-500',
	'cozy-bg-green-500',
	'cozy-bg-branding-primary-500',
];

export function handleMessage(rating, setMessage) {
	if (rating === 0) return setMessage('');
	if (rating > 0 && rating <= 1) return setMessage('Terrible');
	if (rating <= 2) return setMessage('Bad');
	if (rating <= 3) return setMessage('Okay');
	if (rating <= 4) return setMessage('Good');
	return setMessage('Excellent');
}

export function handleNullData(data, display) {
	if (!data) {
		if (typeof display !== 'undefined' || display !== null) return display;
		return '-';
	}
	return data;
}

export function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

export function throttle(fn, delay = 300) {
	return (args) => {
		if (fn.id) return;

		fn.id = setTimeout(() => {
			fn.call(this, args);
			clearTimeout(fn.id);
			fn.id = null;
		}, delay);
	};
}
