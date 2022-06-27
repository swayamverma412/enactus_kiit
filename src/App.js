import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import Blog from './pages/Blog';
import Home1 from './pages/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home1/>} />
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
