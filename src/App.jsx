import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/bars/navbar/Navbar'
import Article from './pages/article/Article';
import HomeContainer from './pages/home/HomeContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProfileContainer from './pages/profile/ProfileContainer';
import ArticleContaier from './pages/article/ArticleContainer';

function App() {
  const buttons = ['Зарегистрироваться', 'Войти']
  return (
    <Router>
    <Navbar navItems={buttons}/>
    <Routes>
      <Route path='/' element={<HomeContainer />} />
      <Route path='/sign_in' element={<SignIn />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route path='/profile/:login' element={<ProfileContainer />} />
      <Route path='/article/:id' element={<ArticleContaier />} />
    </Routes>
  </Router>
  );
}

export default App;
