import React from 'react'

import Testpage from './Testpage'
import axiosInstance from '../axios'

function Home() {
	axiosInstance.get(`/user/all-profiles/`).then((res) => {
		console.log(res)
		console.log(res.data)
	})

	return (
		<div>
			<Testpage />
		</div>
	)
}

export default Home
