import {MdDarkMode, MdLightMode} from 'react-icons/md'
import {HiMenuAlt3} from 'react-icons/hi'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({onClick, darkMode}) => {
    const [showMenu, setShowMenu] = useState(false)
    const primaryBg = `${darkMode ? 'bg-black' : 'bg-red-500'}`


    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }


  return (
    
    <>
        <nav className={darkMode ? 'bg-black' : 'bg-red-500'} >
            
            
            <div className="container px-3 content-center mx-auto py-4 flex justify-between" >
                <div className="left-brand" >
                    <h1 className="brand text-white text-2xl" ><span className="font-bold" >Bassam</span>Ahmed</h1>
                </div>
                <div className="hidden md:flex basis-1/2 flex items-center justify-around  text-white" >
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/technical">Technical</Link>
                
                
                    <Link to="/">GitHub</Link>
                    <Link to="/">LinkedIn</Link>
                </div>
                <button className="text-white hidden md:block" onClick={onClick} >{darkMode ? <MdLightMode className="text-xl" /> : <MdDarkMode className="text-xl" />}</button>
                <button onClick={toggleMenu} className="block md:hidden" >
                    <HiMenuAlt3 className="text-white text-3xl" />
                </button>
                
                
            </div>

        </nav>
        {showMenu && 
        <div className={`p-5 text-white ${primaryBg} flex flex-col block md:hidden`}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/technical">Technical</Link>

            <button className="text-white flex flex-row-reverse md:block" onClick={onClick} >{darkMode ? <MdLightMode className="text-3xl" /> : <MdDarkMode className="text-3xl" />}</button>
        </div>
        }
    </>
    
  )
}

export default Navbar
