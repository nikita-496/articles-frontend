import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/bars/navbar/Navbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';

function App() {
  const buttons = ['Зарегистрироваться', 'Войти']
  return (
    <Router>
    <Navbar navItems={buttons}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/article' element={<Article />} />
    </Routes>
  </Router>
  );
}

export default App;
