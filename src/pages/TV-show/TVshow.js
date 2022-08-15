import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";

export const Tvshow = () => {
    const [tv, setTv] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/tv/top_rated?api_key=b645acc4d3be69d9fbe44a5e2a8a0faf&language=en-US&page=1',
			)
			.then(function (response) {
				setTv(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [setTv]);

	console.log(tv);

	return (
		<div className='popular'>
			<div className='container'>
				<div className='popular__inner'>
					{tv.length ? (
						<ul className='movie-list'>
							{tv.map((el) => (
								<Card key={el.id} item={el} type="tv"/>
							))}
						</ul>
					) : (
						'loading...'
					)}
				</div>
			</div>
		</div>
	);
}