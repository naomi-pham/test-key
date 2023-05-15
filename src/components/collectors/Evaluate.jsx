/* eslint-disable react/prop-types */
import React, { useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getErrorAndDisplay, handleMessage, renderReviewPlaceholderText } from '../../helpers/Helpers';
import axios from '../api/axios';
import ImageUploader from '../common/ImageUploader';
import Rating from '../common/Rating';

const Evaluate = () => {
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(0);
	const [isShown, setIsShown] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [postError, setPostError] = useState(false);

	const initialState = {
		star: '',
		review: '',
		images: [],
		date: '',
		title: '',
		name: '',
		email: '',
	};

	function reducer(state, action) {
		switch (action.type) {
			case 'INPUT_STAR': {
				return {
					...state,
					star: action.payload,
				};
			}
			case 'INPUT_REVIEW': {
				return {
					...state,
					review: action.payload,
				};
			}
			case 'INPUT_IMAGES': {
				return {
					...state,
					images: [...state.images, action.payload],
				};
			}
			case 'REMOVE_IMAGE': {
				return {
					...state,
					images: state.images.filter((image) => image.id !== action.payload),
				};
			}
			case 'INPUT_EXPERIENCE_DATE': {
				return {
					...state,
					date: action.payload,
				};
			}
			case 'INPUT_TITLE': {
				return {
					...state,
					title: action.payload,
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
		}
		throw Error('Unknown action: ' + action.type);
	}

	const [state, dispatch] = useReducer(reducer, initialState);
	const { title, review, name, email, date, images, star } = state;

	const formFields = [
		{
			id: 0,
			type: 'date',
			name: 'date',
			label: 'Date of experience',
			action: 'INPUT_EXPERIENCE_DATE',
			value: date,
			placeholder: '',
			required: false,
		},
		{
			id: 1,
			type: 'text',
			name: 'title',
			label: 'Give your review a title',
			action: 'INPUT_TITLE',
			value: title,
			placeholder: 'e.g. This service is awesome!',
			required: true,
		},
		{
			id: 2,
			type: 'text',
			name: 'name',
			label: 'Your name',
			action: 'INPUT_NAME',
			value: name,
			placeholder: 'e.g. John',
			required: true,
		},
		{
			id: 3,
			type: 'text',
			name: 'name',
			label: 'Your email',
			action: 'INPUT_EMAIL',
			value: email,
			placeholder: 'e.g. john@gmail.com',
			required: true,
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

	const [imageId, setImageId] = useState(0);

	const handleSetImages = (e) => {
		e.preventDefault();
		dispatch({
			type: 'INPUT_IMAGES',
			payload: { image: e.target.files[0], id: imageId },
		});
		setImageId(imageId + 1);
	};

	const handleRemoveImage = (id) => () => {
		dispatch({ type: 'REMOVE_IMAGE', payload: id });
	};

	// Get values from query string
	const search = useLocation().search;
	const businessUuid = new URLSearchParams(search).get('businessUuid');

	async function handleSubmit(e) {
		e.preventDefault();
		if (!businessUuid) return null;
		try {
			const res = await axios.post(`/api/v1/business/reviews/${businessUuid}`, {
				title: state?.title,
				content: state?.review,
				star: state?.star + 1,
				created_by: state?.name,
				email: state?.email,
				date: state?.date,
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
				className="cozy-rounded-2xl cozy-bg-light-neutral-50 cozy-p-6"
				// style={{ maxWidth: '954px' }}
			>
				{!isSubmitted ? (
					<div
						className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-space-y-3 cozy-text-center"
						style={{ marginBottom: '1.25rem' }}
					>
						<h4 className="cozy-font-graphik-semibold cozy-text-title-1 cozy-text-light-neutral-800">
							Write a review
						</h4>
						<Rating
							rating={rating}
							handleClick={handleClick}
							message={message}
						/>
					</div>
				) : null}

				{postError ? (
					<p
						className="cozy-rounded-md"
						style={{ background: '#FBECEC', color: '#C43C3C' }}
					>
						{getErrorAndDisplay(postError)}
					</p>
				) : null}

				{isShown && (
					<form onSubmit={handleSubmit} style={{ marginTop: '3.25rem' }}>
						{isSubmitted ? (
							<p>Thank you for your feedback!</p>
						) : (
							<div className="cozy-flex cozy-flex-col cozy-gap-8">
								<label
									htmlFor="review"
									className="cozy-font-graphik-medium cozy-text-caption-1 cozy-text-light-neutral-700"
								>
									Tell us more about your experience
									<textarea
										id="review"
										type="text"
										onChange={handleInput('INPUT_REVIEW')}
										value={review}
										className="cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-400 cozy-p-4 cozy-font-graphik placeholder:cozy-text-light-neutral-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
										rows={5}
										placeholder={renderReviewPlaceholderText(star)}
										required
									/>
								</label>

								{/* Image loader */}
								<ImageUploader
									images={images}
									handleSetImages={handleSetImages}
									handleRemoveImage={handleRemoveImage}
								/>

								{formFields.map((field) => (
									<label
										key={field.id}
										className="cozy-font-graphik-medium cozy-text-caption-1 cozy-text-light-neutral-700"
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
											className="cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-3 cozy-font-graphik cozy-text-body-2 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
											required={field.required}
										/>
									</label>
								))}

								<button
									type="submit"
									className="cozy-flex cozy-border cozy-border-branding-primary-500 cozy-bg-branding-primary-500 cozy-font-graphik-semibold cozy-text-light-neutral-25 hover:cozy-cursor-pointer hover:cozy-border-branding-primary-600 hover:cozy-bg-branding-primary-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2 active:cozy-bg-branding-primary-700 disabled:cozy-border-light-neutral-300 disabled:cozy-bg-light-neutral-300 disabled:cozy-text-light-neutral-500"
									style={{
										padding: '0.75rem 1.5rem',
										minWidth: '150px',
										alignSelf: 'center',
										borderRadius: '8px',
										marginTop: '1.25rem',
									}}
								>
									Submit review
								</button>
							</div>
						)}
					</form>
				)}
			</div>
		</>
	);
};

export default Evaluate;
