import axios from 'axios'

const baseURL = 'http://0.0.0.0:8090/api'

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: sessionStorage.getItem('access_token')
			? 'JWT ' + sessionStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json'
	}
})

export default axiosInstance
