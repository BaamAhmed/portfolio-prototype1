import React from 'react'
import MathSVG from '../math.svg'

const Current = ({darkMode}) => {
    const headingColor = `${darkMode ? 'text-white' : 'text-red-500'}`
    const textColor = `${darkMode ? 'text-white' : 'text-black font-normal'}`
    const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
    const buttonText = `${darkMode ? 'text-black': 'text-white'}`

    
  return (
    <div className='container mx-auto mb-20'>
      <div id='current' ></div>
        <div className="grid grid-cols-1 mx-5 md:grid-cols-3">
            <div className="col-span-1 md:col-span-2">
              <h1 className={`${headingColor} font-bold text-3xl`} >what i'm upto right now</h1>
              <p className={`${textColor} mb-3`} >At the moment, I’m attending the University of Waterloo as a student in the Honours Math (co-op) program, with plans to major in either Data Science / Statistics or Computational Mathematics. </p>
              <p className={`${textColor} mb-3`} >Along with my studies, however, I’m also constantly at work to get some smaller passion projects up and running here and there, so that I can keep my skills sharp and continue learning and growing as a developer in the meanwhile. </p>
            </div>
            <div className='' >
                <img className='w-10/12' src={MathSVG} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Current