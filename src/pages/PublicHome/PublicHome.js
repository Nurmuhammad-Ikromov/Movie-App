import { Link } from 'react-router-dom';
import logo from '../../assets/images/public-logo.png'
import './PublicHome.scss';
export const PublicHome = () => {
	return (
		<div className='public'>
			<div className='container'>
				<div className='public__inner'>
					<header className='public__header'>
						<Link to='/' className='public__logo'>
							<img
								src={logo}
								width={60}
								height={60}
								alt='public site logo' className='p-0'
							/>
						</Link>
						<Link className='btn btn-primary' to='/login'>
							Login
						</Link>
					</header>
				</div>
			</div>
		</div>
	);
};
