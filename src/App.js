import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
