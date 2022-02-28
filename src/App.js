import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'
import ToDoList from './pages/ToDoList'
import CoinTracker from './pages/CoinTracker'
import Movie from './pages/Movie'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import Detail from './components/Detail'

const App = () => {
  return (
    <Router basename='/react-for-beginners'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/coin' element={<CoinTracker />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
