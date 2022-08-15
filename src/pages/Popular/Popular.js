import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import './Popular.scss';

export const Popular = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/popular?api_key=b645acc4d3be69d9fbe44a5e2a8a0faf&language=en-US&page=1',
			)
			.then(function (response) {
				setMovie(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [setMovie]);

	console.log(movie);

	return (
		<div className='popular'>
			<div className='container'>
				<div className='popular__inner'>
					{movie.length ? (
						<ul className='movie-list'>
							{movie.map((el) => (
								<Card key={el.id} item={el} type="movie"/>
							))}
						</ul>
					) : (
						'loading...'
					)}
				</div>
				
			</div>
		</div>
	);
};
