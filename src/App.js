import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import StoryPage from './Components/StoryPage';
import ListPage from './Components/ListPage';
import ProfilePage from './Components/ProfilePage';
import RecomPage from './Components/RecomPage';
import ParticularPage from './Components/ParticularPage';
import NotifyPage from './Components/NofiyPage';
import Write from './Components/Write';
import SignIn from './Components/SignIn';
import Sign from './Components/Sign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/SignIn' element={<SignIn />} />
            <Route exact path='/Sign' element={<Sign />} />
            <Route exact path='/Home' element={<HomePage />} />
            <Route exact path='/Story' element={<StoryPage />} />
            <Route exact path='/List' element={<ListPage />} />
            <Route exact path='/Profile' element={<ProfilePage />} />
            <Route exact path='/Recommandation' element={<RecomPage />} />
            <Route exact path='/ParticularPage' element={<ParticularPage />} />
            <Route exact path='/Notification' element={<NotifyPage />} />
            <Route exact path='/Write' element={<Write />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
