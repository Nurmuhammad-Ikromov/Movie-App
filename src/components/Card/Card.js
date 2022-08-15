import './Card.scss'
import {Link} from 'react-router-dom'

export const Card = ({ item, type }) => {
	return (
		<Link  to={`/${type}/${item.id}`} className="card" >
			<img width="280" className="card-img" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='movie design' />
            <span className='card-vote'>{item.vote_average}</span>
			<div className='card-body'>
				<h3 className='card-title'>{item.original_title? item.original_title : item.original_name}</h3>
			</div>
		</Link>
	);
};
