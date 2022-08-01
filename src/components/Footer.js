import React from 'react'
import {HashLink} from 'react-router-hash-link'

const Footer = ({darkMode}) => {
  const footerBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
  const textColor = `${darkMode ? 'text-black' : 'text-white'}`

  return (
    <div className={`${footerBg} mt-20 text-white px-5`} >
        <div className="container mx-auto items-center grid grid-cols-1 md:grid-cols-3 justify-between py-10">
            
            <h1 className={`${textColor} text-left font-light text-2xl`} ><span className='font-bold' > Bassam</span>Ahmed</h1>
            
            <p className={`${textColor} text-center`} >Made with <span>❤️</span> by Bassam Ahmed</p>
            <HashLink to="/#home" className={`${textColor} text-right font-bold`}>back to top</HashLink>
        </div>
    </div>
  )
}

export default Footer