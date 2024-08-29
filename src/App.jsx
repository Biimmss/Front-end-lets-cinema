import React from 'react'
import Login from './component/Login.jsx'
import Dashboard from './page/Dashboard.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App