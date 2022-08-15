import { Route, Routes } from 'react-router-dom';
import { Popular } from './pages/Popular/Popular';
import { Toprated } from './pages/TopRated/Toprated';
import { Tvshow } from './pages/TV-show/TVshow';
import { Upcoming } from './pages/UpComing/Upcoming';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Single } from './pages/Single/Single';
import { SingleTV } from './pages/Single/SingleTv';

function Private() {
	return (
		<>
			<>
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/popular' element={<Popular />} />
					<Route path='/upcoming' element={<Upcoming />} />
					<Route path='/top' element={<Toprated />} />
					<Route path='/tv' element={<Tvshow />} />
					<Route path='/movie/:id' element={<Single/>} />
					<Route path='/tv/:id' element={<SingleTV  />} />
					<Route path='*' element={<h2>Error 404</h2>} />
				</Routes>
			</>
		</>
	);
}

export default Private;
