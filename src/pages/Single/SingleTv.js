
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Single.scss';
export const SingleTV = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [genres, setGenres] = useState()

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/tv/` + id, {
				params: {
					api_key: 'b645acc4d3be69d9fbe44a5e2a8a0faf',
				},
			})
			.then(function (response) {
				setMovie(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	console.log(movie);

	useEffect(() => {
		setGenres(movie.genres);
	}, [movie]);

	return (
		<div
			className='single-movie'
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
			}}>
			<img
				className='single-img'
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt='' width={400}
			/>
			<div className='single-info'>
				<h1 className='single-title'> {movie.original_name}</h1>
				<p>Date: {movie.first_air_date}</p>

				<p> Original Language: {movie.original_language}
				</p>

				<p>Vote: {movie.vote_count}</p>
				<p>
					{' '}
					Genres:{' '}
					{genres && genres.map((e) => <span> {e.name} </span>)}
				</p>
				<p>Overview: {movie.overview}</p>
			</div>
		</div>
	);
};
