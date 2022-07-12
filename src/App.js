// import logo from './logo.svg';
import './App.css';

// import {motion, MotionConfig} from 'framer-motion'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import About from './components/About'
import Projects from './components/Projects'
import Technical from './components/Technical'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const onClick = () => {
    setDarkMode(!darkMode)
  }


  return (
    <Router>
      <div className={darkMode ? 'bg-black' : 'bg-white'} >
        <Navbar onClick={onClick} darkMode={darkMode} />
        <MainBody darkMode={darkMode} />
        <Routes>
          <Route path='/about' element={<About darkMode={darkMode} />} />
          <Route path='/projects' element={<Projects darkMode={darkMode} />} />
          <Route path='/technical' element={<Technical darkMode={darkMode} />} />

        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
