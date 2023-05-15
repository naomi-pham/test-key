/* eslint-disable react/prop-types */
import React from 'react';
import { IconRemoveImage, IconVideo } from './Icons';

const ImageUploader = ({ images, handleSetImages, handleRemoveImage }) => {
	return (
		<div style={{ color: '#6B778C' }}>
			<p className="cozy-font-graphik-medium cozy-text-caption-1">
				Would you like to add photos or videos
			</p>
			<div className="cozy-mt-2 cozy-flex cozy-flex-wrap cozy-gap-4">
				{images?.length > 0 ? (
					<>
						{images.map((image) => (
							<div key={image.id} className="cozy-relative">
								<div
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
								</div>
								<img
									src={URL.createObjectURL(image.image)}
									alt="avatar"
									style={{
										maxWidth: 106,
										minWidth: 106,
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
				<div className={`cozy-w-full ${images.length === 5 && 'cozy-hidden'}`}>
					<label htmlFor="avatar">
						<div
							className="cozy-flex cozy-w-full cozy-items-center cozy-justify-center cozy-p-6 cozy-text-center"
							style={{
								// width: 106,
								// aspectRatio: 1,
								outline: '1px dashed #C1C7D0',
								borderRadius: '.5rem',
							}}
						>
							<div className="cozy-relative cozy-flex cozy-flex-col cozy-items-center cozy-gap-2">
								<i>
									<IconVideo />
								</i>
								<div>
									<p className="cozy-font-graphik-semibold">
										Drag file here or browse.
									</p>
									<p className="cozy-text-body-2">
										Supported files: jpg, png, mp4
									</p>
								</div>
							</div>
						</div>
						<input
							id="avatar"
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