import {useState} from 'react'

import Jumbotron from './Jumbotron'
import AboutExc from './AboutExc'
import Projects from './Projects'
import Current from './Current'
import Technical from './Technical'
import Footer from './Footer'

const MainBody = ({darkMode}) => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e) => {
    setMouseX(e.pageX)
    setMouseY(e.pageY)
  }

  return (
    <div onMouseMove={handleMouseMove} className={`min-h-screen ${darkMode ? 'bg-black':'bg-white'}`} >
        <Jumbotron darkMode={darkMode} />
        <AboutExc x={mouseX} y={mouseY} darkMode={darkMode} />
        <Projects darkMode={darkMode}/>
        <Current darkMode={darkMode} />
        <Technical darkMode={darkMode} />
        <Footer darkMode={darkMode} />
    </div>
  )
}

export default MainBody