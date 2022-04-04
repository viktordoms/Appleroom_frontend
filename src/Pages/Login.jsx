import React, { useState } from 'react'
import validator from 'validator/es'
import axiosInstance from '../axios'

function Login() {
	const initialFormData = Object.freeze({
		email: '',
		password: ''
	})
	const [formLogin, setLogin] = useState(initialFormData)

	const changeInputLogin = (event) => {
		setLogin({
			...formLogin,
			[event.target.name]: event.target.value.trim()
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formLogin)

		if (!validator.isEmail(formLogin.email)) {
			alert('Ви не ввели email')
		} else {
			axiosInstance
				.post(`/token/`, {
					email: formLogin.email,
					password: formLogin.password
				})
				.then((res) => {
					sessionStorage.setItem('access_token', res.data.access)
					sessionStorage.setItem('refresh_token', res.data.refresh)
					axiosInstance.defaults.headers['Authorization'] =
						'JWT ' + sessionStorage.getItem('access_token')
					window.location.href = 'http://localhost:3000/'
					console.log(res)
					console.log(res.data)
				})
				.catch(() => {
					alert('Помилка')
				})
		}
	}

	return (
		<div className="form">
			<h2>Авторизація:</h2>
			<form onSubmit={handleSubmit}>
				<p>
					Email:{' '}
					<input
						type="email"
						id="email"
						name="email"
						value={formLogin.email}
						onChange={changeInputLogin}
					/>
				</p>
				<p>
					Password:{' '}
					<input
						type="password"
						id="password"
						name="password"
						value={formLogin.password}
						onChange={changeInputLogin}
					/>
				</p>
				<input type="submit" />
			</form>
		</div>
	)
}

export default Login
