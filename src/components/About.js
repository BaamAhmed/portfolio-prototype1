import React from 'react'

const About = ({darkMode}) => {

    const accentText = `${darkMode ? 'text-white' : 'text-red-500'}`
    const primaryText = `${darkMode ? 'text-white' : 'text-black'}`
    const secondaryText = `${darkMode ? 'text-white' : 'text-slate-400'}`

  return (
    <div className="min-h-screen container mx-auto p-4" >
        <h1 className={`${accentText} font-light text-5xl`} >About Me</h1>
    </div>
  )
}

export default About