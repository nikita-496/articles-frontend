import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/bars/navbar/Navbar'
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';
import HomeContainer from './pages/home/HomeContainer';

function App() {
  const buttons = ['Зарегистрироваться', 'Войти']
  return (
    <Router>
    <Navbar navItems={buttons}/>
    <Routes>
      <Route path='/' element={<HomeContainer />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/article' element={<Article />} />
    </Routes>
  </Router>
  );
}

export default App;
