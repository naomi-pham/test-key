/* eslint-disable react/prop-types */
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Carousel from '../common/Carousel';

const CozyReviews = ({ id }) => {
	// const search = useLocation().search;
	// const businessUuid = new URLSearchParams(search).get('businessUuid');

	const { data, error } = useAxios(`${id}`);

	return (
		<div>
			{error && <p className="cozy-opacity-60"> Reviews not found</p>}
			{data && <Carousel slides={data?.data?.reviews} />}
		</div>
	);
};

export default CozyReviews;
