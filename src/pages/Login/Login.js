import axios from 'axios';
import { useRef } from 'react';
import { useAuth } from '../../Hook/useAuth';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export const Login = () => {
	const elEmail = useRef();
	const elPassword = useRef();
	const navigate = useNavigate();
	const { setToken } = useAuth();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://reqres.in/api/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				console.log(response.data);
				if (response.data) {
					setToken(response.data);
					navigate('/');
				}
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	return (
		<div className='pt-5 login'>
			<h2 className='text-center'>Login</h2>
			<form onSubmit={handleSubmit} className='w-50 login-form'>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputEmail1'
						className='form-label '
						style={{ color: '#f00' }}>
						Email address
					</label>
					<input
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						ref={elEmail}
						placeholder='Enter email...'
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
						style={{ color: '#f00' }}>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						ref={elPassword}
						placeholder='Enter password...'
					/>
				</div>

				<button
					type='submit'
					className='btn btn-primary d-block mx-auto'>
					Submit
				</button>
			</form>
		</div>
	);
};
