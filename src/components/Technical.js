import {FaBootstrap} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {SiMongodb, SiExpress, SiTailwindcss} from 'react-icons/si'
import {DiReact} from 'react-icons/di'

const Technical = ({darkMode}) => {
  const headingColor = `${darkMode ? 'text-white' : 'text-red-500'}`
  const textColor = `${darkMode ? 'text-white' : 'text-black font-normal'}`
  const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
  const buttonText = `${darkMode ? 'text-black': 'text-white'}`
  const buttonBg = `${darkMode ? 'bg-black' : 'bg-white'}`
  const progressShadow = `${darkMode ? 'bg-gray-300' : 'bg-red-400'}`
  const progressMain = `${darkMode ? 'bg-black' : 'bg-white'}`

    

  return (
    <div className='container mx-auto' >
      <div id="tech"></div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className={`order-2 md:order-1 m-2 mx-5`} >
          <div className={`${primaryBg} rounded-lg p-3`}>
            <h1 className={`${buttonText} font-bold text-2xl mb-3`} >languages</h1>

            <h3 className={`${buttonText} font-semibold text-lg mb-1`} >JavaScript</h3>
            <div className={`${progressShadow} w-full rounded-full h-1.5 mb-3`}>
              <div className={`${progressMain} h-1.5 w-10/12  rounded-full`}></div>
            </div>
            
            <h3 className={`${buttonText} font-semibold text-lg mb-1`} >HTML + CSS</h3>
            <div className={`${progressShadow} w-full rounded-full h-1.5 mb-3`}>
              <div className={`${progressMain} h-1.5 w-8/12  rounded-full`}></div>
            </div>


          </div>
        </div>
        <div className={`order-3 md:order-2 m-2 mx-5`}>
          <div className={` p-3 ${primaryBg} rounded-lg`} >
            <h1 className={`${buttonText} font-bold text-2xl mb-4`} >technologies, frameworks, libraries</h1>

            <div className='grid grid-cols-1  md:grid-cols-2 gap-2' >
              <div className={`flex items-center p-2 rounded-lg ${buttonBg}`} >
                <GrNode className={`${textColor} mr-2 text-2xl`} />
                <p className={`${textColor} text-lg`} >NodeJS</p>
              </div>
              <div className={`flex items-center p-2 rounded-lg ${buttonBg}`} >
                <FaBootstrap className={`${textColor} mr-2 text-2xl`} />
                <p className={`${textColor} text-lg`} >Bootstrap</p>
              </div>
              <div className={`flex items-center p-2 rounded-lg ${buttonBg}`} >
                <SiMongodb className={`${textColor} mr-2 text-2xl`} />
                <p className={`${textColor} text-lg`} >MongoDB</p>
              </div>
              <div className={`flex  items-center p-2 rounded-lg ${buttonBg}`} >
                <SiExpress className={`${textColor} mr-2 text-2xl`} />
                <p className={`${textColor} text-lg`} >ExpressJS</p>
              </div>
              <div className={`flex col-span-2 items-center p-2 rounded-lg ${buttonBg}`} >
                <DiReact className={`${textColor} mr-2 text-2xl`} />
                <p className={`${textColor} text-lg`} >React + React Native</p>
              </div>
              <div className={`flex col-span-2 items-center p-2 rounded-lg ${buttonBg}`} >
                <SiTailwindcss className={`${textColor} mr-2 text-2xl`} />
                <p className={`${textColor} text-lg`} >Tailwind CSS</p>
              </div>
            </div>
            
          </div>

        </div>
        <div className='mx-5 order-1 md:order-3 text-right' >
          <h1 className={`${headingColor} font-bold text-3xl`} >my tech stack</h1>
          <p className={`${textColor} mb-3`} >My first foray into programming was as a web developer, through a Udemy bootcamp by Colt Steele, where I was first introduced to JavaScript. Since then, I have used JS for nearly everything, be it front end, back end, or even mobile development.</p>
          <p className={`${textColor} mb-3`} >I’m currently learning the ins and outs of the React framework (in fact, this entire website is made with React and TailwindCSS)</p>

        </div>
      </div>
    </div>
  )
}

export default Technical