import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import View from './components/View.js';

import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import MyLinks from './pages/MyLinks.js';
import Ranking from './pages/Ranking.js';

import './assets/styles/reset.css';
import './assets/styles/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <View>
        <Navbar />
     {/*    <Routes>
          <Route path='/' exact>
            <Ranking />
          </Route>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
          <Route path='/users/me' exact>
            <MyLinks />
          </Route>
          <Route path='/ranking' exact>
            <Ranking />
          </Route>
        </Routes> */}
      </View>
    </BrowserRouter>
  );
}