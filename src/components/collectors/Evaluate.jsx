/* eslint-disable react/prop-types */
import React, { useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
	getErrorAndDisplay,
	handleMessage,
	renderReviewPlaceholderText,
} from '../../helpers/Helpers';
import axios from '../api/axios';
import { IconArrowLink } from '../common/Icons';
import Rating from '../common/Rating';

const Evaluate = ({ id }) => {
	const [rating, setRating] = useState(0);
	const [isShown, setIsShown] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [postError, setPostError] = useState(false);

	const initialState = {
		star: 0,
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
			case 'RESET': {
				return initialState;
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
		handleMessage(index + 1);
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

	const handleResetForm = () => {
		dispatch({ type: 'RESET' });
	};

	// Get values from query string
	const params = useLocation();

	let businessUuid;

	if (params && params?.search) {
		businessUuid = new URLSearchParams(params?.search).get('businessUuid');
	} else {
		businessUuid = id
	}

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
			// window.location.reload(false);
			console.log('🚀 ~ file: usePostAxios.jsx:13 ~ postData ~ res:', res);
		} catch (error) {
			console.log(111, error?.response?.data?.message);
			setPostError(error.response.data.message);
		} finally {
			setIsSubmitted(false);
			dispatch({ type: 'RESET' });
		}
	}

	return (
		<>
			<div
				className="cozy-p-6"
				// style={{ paddingBottom: '' }}
			>
				{!isSubmitted ? (
					<div className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-space-y-3 cozy-text-center">
						<h4 className="cozy-text-title-1 cozy-font-semibold cozy-text-light-neutral-800">
							Rate your recent experience
						</h4>
						<Rating rating={rating} handleClick={handleClick} />
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

				{/* {isShown && ( */}
				<form onSubmit={handleSubmit}>
					{isSubmitted ? (
						<div>
							<p>Thank you for your feedback!</p>
							<a
								href={`https://cozycot.just.engineer/profile/${id}?utm_source=Widget`}
								target="_blank"
								rel="noreferrer"
							>
								<button
									className="cozy-flex cozy-items-center cozy-gap-2 cozy-text-title-2 cozy-font-semibold"
									style={{
										color: '#4F3CC8',
										marginTop: '0.5rem',
										fontSize: 14,
									}}
								>
									Go to website
									<span>
										<i>
											<IconArrowLink />
										</i>
									</span>
								</button>
							</a>
						</div>
					) : (
						<div
							className="cozy-flex cozy-flex-col cozy-gap-8"
							style={{ marginTop: '3.25rem' }}
						>
							<label
								htmlFor="review"
								className="cozy-text-caption-1 cozy-font-medium cozy-text-light-neutral-700"
							>
								Tell us more about your experience
								<textarea
									id="review"
									type="text"
									onChange={handleInput('INPUT_REVIEW')}
									value={review}
									className="cozy-font-regular cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-400 cozy-p-4 cozy-text-body-2 placeholder:cozy-text-light-neutral-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
									rows={5}
									placeholder={renderReviewPlaceholderText(star)}
									required
								/>
							</label>

							{/* Image loader */}
							{/* <ImageUploader
									images={images}
									handleSetImages={handleSetImages}
									handleRemoveImage={handleRemoveImage}
								/> */}

							{formFields.map((field) => (
								<label
									key={field.id}
									className="cozy-text-caption-1 cozy-font-medium cozy-text-light-neutral-700"
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
										className="cozy-font-regular cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-3 cozy-text-body-2 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2"
										required={field.required}
									/>
								</label>
							))}

							<button
								type="submit"
								className="cozy-flex cozy-border cozy-border-branding-primary-500 cozy-bg-branding-primary-500 cozy-font-medium cozy-text-light-neutral-25 hover:cozy-cursor-pointer hover:cozy-border-branding-primary-600 hover:cozy-bg-branding-primary-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2 active:cozy-bg-branding-primary-700 disabled:cozy-border-light-neutral-300 disabled:cozy-bg-light-neutral-300 disabled:cozy-text-light-neutral-500"
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
				{/* )} */}
			</div>
		</>
	);
};

export default Evaluate;
