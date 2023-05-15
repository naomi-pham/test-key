import errorCodes from '../components/common/errorCodes';

export const stars = [1, 2, 3, 4, 5];

export const colors = [
	'cozy-bg-red-500 cozy-text-light-neutral-25',
	'cozy-bg-orange-500 cozy-text-light-neutral-25',
	'cozy-bg-yellow-500 cozy-text-light-neutral-25',
	'cozy-bg-green-500 cozy-text-light-neutral-25',
	'cozy-bg-branding-primary-500 cozy-text-light-neutral-25',
];

export function handleMessage(rating, setMessage) {
	if (rating === 0) return setMessage('');
	if (rating > 0 && rating <= 1) return setMessage('Terrible');
	if (rating <= 2) return setMessage('Bad');
	if (rating <= 3) return setMessage('Okay');
	if (rating <= 4) return setMessage('Good');
	return setMessage('Excellent');
}

export function renderReviewPlaceholderText(star) {
	if (star > 0 && star <= 1)
		return 'What went wrong? How can this company improve? Remember to be honest, helpful and constructive.';
	if (star <= 2)
		return 'What do like or dislike? What is this company doing well, or how can they improve? Remember to be honest, helpful and constructive.';
	if (star <= 5)
		return 'What made your experience great? What is this company doing well? Remember to be honest, helpful and constructive.';
	return null;
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

export function getErrorAndDisplay(code) {
	if (errorCodes[code]) return errorCodes[code].setMessage;
	return errorCodes.SERVER_ERROR.message;
}
