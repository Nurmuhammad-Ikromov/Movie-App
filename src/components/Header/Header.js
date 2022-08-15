import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	const navigate = useNavigate();
	const handleLogOut = () => {
		window.localStorage.removeItem('token');
		navigate('/');
		window.location.reload();
	};
	return (
		<header className='site-header'>
			<div className='container'>
				<div className='site-header__inner'>
					<nav className='navbar'>
						<ul className='navbar__list'>
							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/'>
									Home
								</NavLink>
							</li>

							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/popular'>
									Popular
								</NavLink>
							</li>

							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/upcoming'>
									UpComing
								</NavLink>
							</li>

							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/top'>
									Top Rated
								</NavLink>
							</li>

							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/tv'>
									TV-Show
								</NavLink>
							</li>
						</ul>
					</nav>

					<input className='site-header__input' type='text' />
					<button
						className='ms-3 btn btn-danger'
						onClick={handleLogOut}>
						Log out
					</button>
				</div>
			</div>
		</header>
	);
};
