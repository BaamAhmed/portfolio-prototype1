import {MdDarkMode, MdLightMode} from 'react-icons/md'
import {HiMenuAlt3} from 'react-icons/hi'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

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
                    <HashLink to="/#home">Home</HashLink>
                    <HashLink to="/#about">About</HashLink>
                    <HashLink to="/#projects">Projects</HashLink>
                    <HashLink to="/#current">Currently</HashLink>
                    <HashLink to="/#tech">Tech</HashLink>
                
                
                    <a target='_blank' rel='noreferrer' href="https://github.com/BaamAhmed">GitHub</a>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/bassam-ahmed-510044138/">LinkedIn</a>
                </div>
                <button className="text-white hidden md:block" onClick={onClick} >{darkMode ? <MdLightMode className="text-xl" /> : <MdDarkMode className="text-xl" />}</button>
                <button onClick={toggleMenu} className="block md:hidden" >
                    <HiMenuAlt3 className="text-white text-3xl" />
                </button>
                
                
            </div>

        </nav>
        {showMenu && 
        <div className={`p-5 text-white ${primaryBg} flex flex-col block md:hidden`}>
            <HashLink to="/#home">Home</HashLink>
                    <HashLink to="/#about">About</HashLink>
                    <HashLink to="/#projects">Projects</HashLink>
                    <HashLink to="/#current">Currently</HashLink>
                    <HashLink to="/#tech">Tech</HashLink>
                
                
                    <a target='_blank' rel='noreferrer' href="https://github.com/BaamAhmed">GitHub</a>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/bassam-ahmed-510044138/">LinkedIn</a>
            <button className="text-white flex flex-row-reverse md:block" onClick={onClick} >{darkMode ? <MdLightMode className="text-3xl" /> : <MdDarkMode className="text-3xl" />}</button>
        </div>
        }
    </>
    
  )
}

export default Navbar
