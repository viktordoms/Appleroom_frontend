import React, { useState } from 'react'
import validator from 'validator/es'
import axiosInstance from '../axios'

function Register() {
	const [formRegister, setRegister] = useState(() => {
		return {
			user_name: '',
			email: '',
			password: '',
			password2: ''
		}
	})
	const changeInputRegister = (event) => {
		event.persist()
		setRegister((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formRegister)

		if (!validator.isEmail(formRegister.email)) {
			alert('Ви не ввели email')
		} else if (formRegister.password !== formRegister.password2) {
			alert('Паролі не співпадають')
		} else {
			axiosInstance
				.post(`/user/register/`, {
					email: formRegister.email,
					user_name: formRegister.user_name,
					password: formRegister.password
				})
				.then((res) => {
					window.location.href = 'http://localhost:3000/login'
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
			<h2>Реєстрація юзера:</h2>
			<form onSubmit={handleSubmit}>
				<p>
					Name:{' '}
					<input
						type="user_name"
						id="user_name"
						name="user_name"
						value={formRegister.user_name}
						onChange={changeInputRegister}
					/>
				</p>
				<p>
					Email:{' '}
					<input
						type="email"
						id="email"
						name="email"
						value={formRegister.email}
						onChange={changeInputRegister}
						formNoValidate
					/>
				</p>
				<p>
					Password:{' '}
					<input
						type="password"
						id="password"
						name="password"
						value={formRegister.password}
						onChange={changeInputRegister}
						formNoValidate
					/>
				</p>
				<p>
					Repeat password:{' '}
					<input
						type="password"
						id="password2"
						name="password2"
						value={formRegister.password2}
						onChange={changeInputRegister}
						formNoValidate
					/>
				</p>
				<input type="submit" />
			</form>
		</div>
	)
}

export default Register
