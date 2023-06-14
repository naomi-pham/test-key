/* eslint-disable react/prop-types */
import React from 'react';
import { IconRemoveImage, IconVideo } from './Icons';

const ImageUploader = ({ images, handleSetImages, handleRemoveImage }) => {
	return (
		<div style={{ color: '#6B778C' }}>
			<p className="cozy-text-caption-1 cozy-font-medium">
				Would you like to add photos or videos
			</p>
			<div className="cozy-mt-2 cozy-flex cozy-flex-wrap cozy-gap-4">
				{images?.length > 0 ? (
					<>
						{images.map((image) => (
							<div
								key={image.id}
								className="cozy-relative"
								style={{
									opacity: image ? 1 : 0,
									transition: 'all 1s ease-in-out',
									transform: image ? 'translate(0%)' : '-translateY(10px)',
								}}
							>
								<button
									type="button"
									className="cozy-flex cozy-flex-col cozy-items-center cozy-justify-center"
									style={{
										position: 'absolute',
										zIndex: 10,
										right: 6,
										top: 6,
									}}
									onClick={handleRemoveImage(image.id)}
								>
									<i>
										<IconRemoveImage />
									</i>
								</button>
								<img
									src={URL.createObjectURL(image.image)}
									alt="avatar"
									style={{
										maxWidth: 152,
										minWidth: 152,
										aspectRatio: 1,
										overflow: 'hidden',
										objectFit: 'cover',
										borderRadius: '.5rem',
									}}
								/>
							</div>
						))}
					</>
				) : null}
				<div style={{ width: images.length > 0 ? 'auto' : '100%' }}>
					<label htmlFor="review-image">
						<div
							className="cozy-flex cozy-w-full cozy-items-center cozy-justify-center cozy-p-6 cozy-text-center"
							style={{
								width: images?.length > 0 ? 152 : '100%',
								height: images?.length > 0 ? 152 : '100%',
								outline: '1px dashed #C1C7D0',
								borderRadius: '.5rem',
								display: images.length > 4 ? 'none' : 'block',
							}}
						>
							<div className="cozy-relative cozy-flex cozy-flex-col cozy-items-center cozy-gap-2">
								<i>
									<IconVideo />
								</i>
								{images?.length > 0 ? (
									<p>Add images</p>
								) : (
									<div>
										<p className="cozy-font-semibold">
											Drag file here or browse.
										</p>
										<p className="cozy-text-body-2">
											Supported files: jpg, png
										</p>
									</div>
								)}{' '}
							</div>
						</div>
						<input
							id="review-image"
							type="file"
							accept="image/*"
							className="cozy-hidden"
							onChange={handleSetImages}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

export default ImageUploader;
