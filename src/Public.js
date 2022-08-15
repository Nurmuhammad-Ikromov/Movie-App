import { Login } from './pages/Login/Login';
import { Routes, Route} from 'react-router-dom';
import { PublicHome } from './pages/PublicHome/PublicHome';
export const Public = () => {
	return (
		
			<Routes>
				<Route path='/' element={<PublicHome />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<h2>Error 404</h2>} />
			</Routes>

	);
};
