import React, { useReducer } from 'react';
import { useState } from 'react';
import { handleMessage } from '../../helpers/Helpers';
import Rating from '../common/Rating';

const Evaluate = () => {
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(0);
	const [isShown, setIsShown] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleClick = (index) => {
		setRating(index);
		setIsShown(true);
		handleMessage(index + 1, setMessage);
	};

	const initialState = {
		title: '',
		review: '',
		name: '',
	};

	function reducer(state, action) {
		switch (action.type) {
			case 'INPUT_TITLE': {
				return {
					...state,
					title: action.payload,
				};
			}
			case 'INPUT_REVIEW': {
				return {
					...state,
					review: action.payload,
				};
			}
			case 'INPUT_NAME': {
				return {
					...state,
					name: action.payload,
				};
			}
		}
		throw Error('Unknown action: ' + action.type);
	}

	const [state, dispatch] = useReducer(reducer, initialState);
	const { title, review, name } = state;

	const formFields = [
		{
			id: 1,
			type: 'text',
			name: 'title',
			label: 'Give your review a title',
			action: 'INPUT_TITLE',
			value: title,
			placeholder: 'Example: Awesome service!',
		},
		{
			id: 2,
			type: 'text',
			name: 'name',
			label: 'Your name',
			action: 'INPUT_NAME',
			value: name,
			placeholder: 'Example: Ben',
		},
	];

	function handleSubmit() {
		console.log(state);
		setIsSubmitted(true);
	}

	const handleInput = (type) => (e) => {
		dispatch({ type: type, payload: e.target.value });
	};

	return (
		<>
			<div className="space-y-5 bg-white px-4 py-6 shadow-md">
				<div className="space-y-2">
					<h4 className="font-500 text-base">Rate your recent experience</h4>
					<Rating rating={rating} handleClick={handleClick} message={message} />
				</div>

				{isShown && (
					<div className="space-y-2">
						{isSubmitted ? (
							<p className="pt-2">Thank you for your feedback!</p>
						) : (
							<form onSubmit={handleSubmit} className="flex flex-col gap-4">
								<label htmlFor="review" className="text-sm text-black-700">
									Share your review
									<textarea
										id="review"
										type="text"
										onChange={handleInput('INPUT_REVIEW')}
										value={review}
										className="border-dark-400 mt-1 w-full rounded border bg-light p-3 py-2 text-sm focus:bg-white focus:outline-rose-gradient"
										rows={5}
										placeholder="This is where you write your reviews."
										required
									/>
								</label>

								{formFields.map((field) => (
									<label
										key={field.id}
										className="text-sm text-black-700"
										htmlFor={field.name}
									>
										{field.label}
										<input
											type={field.type}
											id={field.name}
											name={field.name}
											onChange={handleInput(field.action)}
											value={field.value}
											placeholder={field.placeholder}
											className="border-dark-400 mt-1 w-full rounded border bg-light p-3 py-2 text-sm focus:bg-white focus:outline-rose-gradient"
										/>
									</label>
								))}

								<input
									type="submit"
									value="Submit review"
									className="mt-2 cursor-pointer rounded-md bg-brand p-2 font-500 text-light hover:bg-black-500 hover:ring-black-400"
								/>
							</form>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Evaluate;
