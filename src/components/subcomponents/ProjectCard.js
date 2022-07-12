import {useState} from 'react'
import {motion} from 'framer-motion'
import {FaBootstrap} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {SiMongodb, SiExpress, SiJavascript, SiDiscord} from 'react-icons/si'
import {DiReact} from 'react-icons/di'



const ProjectCard = ({darkMode, icons, title, mainText, links}) => {
    const [showModal, setShowModal] = useState(false)
    const headingColor = `${darkMode ? 'text-white' : 'text-red-500'}`
    const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
    const invertBg = `${darkMode ? 'bg-black': 'bg-white'}`
    const buttonText = `${darkMode ? 'text-black': 'text-white'}`
  

    const onClick = () => {
        setShowModal(!showModal)
    }

  return (
    <motion.div onClick={onClick} whileTap={{scale:1.2}} whileHover={{scale:0.95}} className={`w-full md:w-1/2  p-2`} >
        <div className={`${primaryBg} p-3 rounded-lg`} >
            <div  className="flex justify-between items-center">
                <h1 className={`${buttonText} text-lg font-semibold `} >{title}</h1>
                <div className='flex'>
                    {/* {icons.map((icon) => {
                        return console.log(icon)
                    })} */}
                    {icons.includes('FaBootstrap') && <FaBootstrap className={`${buttonText}`} style={iconStyle}/>}
                    {icons.includes('GrNode') && <GrNode className={`${buttonText}`} style={iconStyle}/>}
                    {icons.includes('SiMongodb') && <SiMongodb className={`${buttonText}`} style={iconStyle}/>}
                    {icons.includes('DiReact') && <DiReact className={`${buttonText}`} style={iconStyle}/>}
                    {icons.includes('SiExpress') && <SiExpress className={`${buttonText}`} style={iconStyle}/>}
                    {icons.includes('SiJavascript') && <SiJavascript className={`${buttonText}`} style={iconStyle}/>}
                    {icons.includes('SiDiscord') && <SiDiscord className={`${buttonText}`} style={iconStyle}/>}
                    
                    
                </div>
            </div>
            {showModal &&
            <div >
                <p className={`${buttonText} font-sm mt-3 mb-2`} >{mainText}</p>
                <div className="flex">
                    {links.map((link) => {
                        return (
                            <a rel='noreferrer' target='_blank' className={`w-1/2 mx-1 py-3 text-center rounded-lg ${headingColor} ${invertBg}`} href={link.link}>{link.label}</a>
                        )
                    })}

                </div>
            </div>}

        </div>
    </motion.div>
  )
}

const iconStyle = {
    fontSize: 30,
    marginRight: 5

}
export default ProjectCard