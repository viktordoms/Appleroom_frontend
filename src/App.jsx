import React from 'react'
import './style.css'

import Header from './Components/Header/Header'
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import {Routes} from 'react-router'

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App
