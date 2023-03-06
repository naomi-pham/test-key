export const stars = [1, 2, 3, 4, 5];

export const colors = [
	'bg-red-500',
	'bg-orange-500',
	'bg-yellow-500',
	'bg-green-500',
	'bg-brand',
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
