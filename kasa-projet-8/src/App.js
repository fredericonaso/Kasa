

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/NoPage';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Housing' element={<Housing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
