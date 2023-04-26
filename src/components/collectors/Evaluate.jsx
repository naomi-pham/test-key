/* eslint-disable react/prop-types */
import React, { useReducer, useState } from 'react';
import { getErrorAndDisplay, handleMessage } from '../../helpers/Helpers';
import axios from '../api/axios';
import Rating from '../common/Rating';
import { useLocation } from 'react-router-dom';

const Evaluate = ({ id }) => {
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(0);
	const [isShown, setIsShown] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [postError, setPostError] = useState(false);

	const initialState = {
		star: '',
		title: '',
		review: '',
		name: '',
		email: '',
		date: '',
	};

	function reducer(state, action) {
		switch (action.type) {
			case 'INPUT_STAR': {
				return {
					...state,
					star: action.payload,
				};
			}
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
			case 'INPUT_EMAIL': {
				return {
					...state,
					email: action.payload,
				};
			}
			case 'INPUT_EXPERIENCE_DATE': {
				return {
					...state,
					date: action.payload,
				};
			}
		}
		throw Error('Unknown action: ' + action.type);
	}

	const [state, dispatch] = useReducer(reducer, initialState);
	const { title, review, name, email, date } = state;

	const formFields = [
		{
			id: 0,
			type: 'date',
			name: 'date',
			label: 'Date of experience',
			action: 'INPUT_EXPERIENCE_DATE',
			value: date,
			placeholder: '',
		},
		{
			id: 1,
			type: 'text',
			name: 'title',
			label: 'Give your review a title',
			action: 'INPUT_TITLE',
			value: title,
			placeholder: 'e.g. This service is awesome!',
		},
		{
			id: 2,
			type: 'text',
			name: 'name',
			label: 'Your name',
			action: 'INPUT_NAME',
			value: name,
			placeholder: 'e.g. John',
		},
		{
			id: 3,
			type: 'text',
			name: 'name',
			label: 'Your email',
			action: 'INPUT_EMAIL',
			value: email,
			placeholder: 'e.g. john@gmail.com',
		},
	];

	const handleClick = (index) => {
		setRating(index);
		setIsShown(true);
		handleMessage(index + 1, setMessage);
		dispatch({ type: 'INPUT_STAR', payload: index });
	};

	const handleInput = (type) => (e) => {
		dispatch({ type: type, payload: e.target.value });
	};

	// Get values from query string
	const search = useLocation().search;
	const businessUuid = new URLSearchParams(search).get('businessUuid');

	async function handleSubmit() {
		if (!businessUuid) return null;
		try {
			const res = await axios.post(`/api/v1/business/reviews/${businessUuid}`, {
				title: state.title,
				content: state.review,
				star: state.star,
				created_by: state.name,
				email: state.email,
				date: state.date,
			});
			setIsSubmitted(true);
			console.log('🚀 ~ file: usePostAxios.jsx:13 ~ postData ~ res:', res);
		} catch (error) {
			console.log(111, error?.response?.data?.message);
			setPostError(error.response.data.message);
		}
	}

	return (
		<>
			<div
				className="cozy-bg-white cozy-rounded-xl cozy-p-6 cozy-shadow-md"
				style={{ maxWidth: '400px' }}
			>
				<div className="cozy-space-y-2">
					<h4 className="cozy-font-graphik-medium cozy-text-title-2 cozy-text-light-neutral-800">
						Rate your recent experience
					</h4>
					<Rating rating={rating} handleClick={handleClick} message={message} />
				</div>

				{postError ? (
					<p
						className="cozy-rounded-md"
						style={{ background: '#FBECEC', color: '#C43C3C' }}
					>
						{getErrorAndDisplay(postError)}
					</p>
				) : null}

				{isShown && (
					<div className="cozy-mt-5">
						{isSubmitted ? (
							<p>Thank you for your feedback!</p>
						) : (
							<div className="cozy-flex cozy-flex-col cozy-gap-4">
								<label
									htmlFor="review"
									className="cozy-font-graphik-medium cozy-text-body-2 cozy-text-light-neutral-700"
								>
									Share your review
									<textarea
										id="review"
										type="text"
										onChange={handleInput('INPUT_REVIEW')}
										value={review}
										className="cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-4 cozy-font-graphik cozy-text-body-2 placeholder:cozy-text-light-neutral-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
										rows={5}
										placeholder="This is where you write your reviews."
										required
									/>
								</label>

								{formFields.map((field) => (
									<label
										key={field.id}
										className="cozy-font-graphik-medium cozy-text-body-2 cozy-text-light-neutral-700"
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
											className="cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-4 cozy-font-graphik cozy-text-body-2 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
										/>
									</label>
								))}

								<button
									onClick={handleSubmit}
									type="submit"
									className="cozy-rounded-xl cozy-border cozy-border-branding-primary-500 cozy-bg-branding-primary-500 cozy-p-4 cozy-font-graphik-semibold cozy-text-light-neutral-25 hover:cozy-cursor-pointer hover:cozy-border-branding-primary-600 hover:cozy-bg-branding-primary-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2 active:cozy-bg-branding-primary-700 disabled:cozy-border-light-neutral-300 disabled:cozy-bg-light-neutral-300 disabled:cozy-text-light-neutral-500"
								>
									Submit review
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Evaluate;
