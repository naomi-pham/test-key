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
			<div className="cozy-space-y-5 cozy-bg-white cozy-py-6 cozy-px-4 cozy-shadow-md">
				<div className="cozy-space-y-2">
					<h4 className="cozy-font-graphik-medium cozy-text-title-2">
						Rate your recent experience
					</h4>
					<Rating rating={rating} handleClick={handleClick} message={message} />
				</div>

				{isShown && (
					<div className="cozy-space-y-2">
						{isSubmitted ? (
							<p className="cozy-pt-2">Thank you for your feedback!</p>
						) : (
							<form
								onSubmit={handleSubmit}
								className="cozy-flex cozy-flex-col cozy-gap-4"
							>
								<label
									htmlFor="review"
									className="cozy-text-body-2 cozy-font-graphik-medium cozy-text-light-neutral-700"
								>
									Share your review
									<textarea
										id="review"
										type="text"
										onChange={handleInput('INPUT_REVIEW')}
										value={review}
										className="cozy-text-body-1 cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-4 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
										rows={5}
										placeholder="This is where you write your reviews."
										required
									/>
								</label>

								{formFields.map((field) => (
									<label
										key={field.id}
										className="cozy-text-body-2 cozy-font-graphik-medium cozy-text-light-neutral-700"
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
											className="cozy-text-body-1 cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-4 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
										/>
									</label>
								))}

								<input
									type="submit"
									value="Submit review"
									className="cozy-mt-2 cozy-cursor-pointer cozy-rounded-md cozy-bg-branding-primary-500 cozy-p-2 cozy-font-graphik-medium cozy-text-light-neutral-25 hover:cozy-bg-black-500 hover:cozy-ring-light-neutral-300"
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
