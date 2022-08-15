import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";

export const Upcoming = () => {
	const [rated, setRated] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/upcoming?api_key=b645acc4d3be69d9fbe44a5e2a8a0faf&language=en-US&page=1',
			)
			.then(function (response) {
				setRated(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [setRated]);

	console.log(rated);

	return (
		<div className='popular'>
			<div className='container'>
				<div className='popular__inner'>
					{rated.length ? (
						<ul className='movie-list'>
							{rated.map((el) => (
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
