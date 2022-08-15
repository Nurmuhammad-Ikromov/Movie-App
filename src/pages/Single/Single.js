import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Single.scss';
export const Single = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [languages, setLanguages] = useState([]);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/movie/` + id, {
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
		setLanguages(movie.spoken_languages);
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
				alt=''
			/>
			<div className='single-info'>
				<h1 className='single-title'> {movie.original_title}</h1>
				<p>{movie.release_date}</p>

				<p>
					{languages && languages.map((e) => <span>{e.name}</span>)}
				</p>

				<p>Vote: {movie.vote_count}</p>
				<p>
					{' '}
					Genres:{' '}
					{genres && genres.map((e) => <span> {e.name} </span>)}
				</p>

				<p>
					Run time: <span>{Math.floor(movie.runtime / 60)} hour</span>{' '}
					<span>
						{movie.runtime - Math.floor(movie.runtime / 60) * 60}{' '}
						minutes
					</span>{' '}
				</p>

				<p>Budget: {Math.ceil(movie.budget / 1000000)}mln $</p>
				<p>Overview: {movie.overview}</p>
			</div>
		</div>
	);
};
