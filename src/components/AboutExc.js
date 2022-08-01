import AnimatedSquare from './subcomponents/AnimatedSquare'
import personImg from '../sitting-8.svg'
import {motion} from 'framer-motion'
import personImgDark from '../sitting-8-dark.svg'

const AboutExc = ({darkMode, x, y}) => {
    const headingColor = `${darkMode ? 'text-white' : 'text-red-500'}`
    const textColor = `${darkMode ? 'text-white' : 'text-black font-normal'}`
    const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
    const buttonText = `${darkMode ? 'text-black': 'text-white'}`

    return (
    <div className="container mx-auto px-5 md:px-0 mb-20">
        <div id='about' ></div>
        <div className="text-white grid grid-cols-1 md:grid-cols-3" >
            <div className=' col-span-1 flex flex-col md:col-span-2 mb-7 order-2 md:order-1' >
                {/* this is the text */}
                <h1 className={`${headingColor} font-bold text-3xl`} >a little about me</h1>
                <p className={`${textColor} mb-3`} >Born in Pakistan, raised in Canada, I've lived my whole life as someone caught between two contrasting worlds. But if there's one thing that's stayed constant for me since the first time I troubleshot my home computers wifi, is my love for everything tech. Over time, this manifested as passion for programming, solving problems, and developing useful tools.</p>
                <p className={`${textColor} mb-10`} >To me, my programming skills and knowledge is simply a tool that I plan to use to resolve different issues, of varying scales, throughout my life.</p>
                <motion.a whileHover={{scale:0.9}} className={`${primaryBg} ${buttonText} p-3 text-center px-7 rounded-lg w-full md:w-1/3 font-semibold text-md`} href="/">check out my stuff</motion.a>
            </div>
            <div className=" order-1 md:order-2 mx-auto mb-7">
                <motion.img
                    animate={{
                        x: [0,15,-15,0]
                    }}
                    transition= {{
                        duration: 10,
                        repeatType: 'loop',
                        repeat: Infinity,
                        // ease: 'easeOut'
                    }}
                    src={personImg} 
                    className='h-10/12 w-full' 
                    alt="">
                    
                </motion.img>
            </div>
        </div>

        {/* <div className="flex flex-col" >
            <AnimatedSquare delay={0} darkMode={darkMode} />
            <AnimatedSquare delay={0.2} darkMode={darkMode} />
            <AnimatedSquare delay={0.4} darkMode={darkMode} />
            <AnimatedSquare delay={0.6} darkMode={darkMode} />
            <div className="flex items-center">
                <AnimatedSquare delay={0.8} darkMode={darkMode} />
                <h2 className={`${headingColor} font-bold text-3xl ml-4`} >a little about myself</h2>
            </div>
            <div className="ml-16 grid grid-cols-1 md:grid-cols-3" >
                <p className={`${textColor} col-span-2  font-light`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo ipsum quae? Unde dicta repellendus beatae culpa amet, sint provident eius, ea ducimus libero voluptate deleniti maiores numquam, cum facilis! </p>
            </div>
            
        </div> */}
    </div>
  )
}

export default AboutExc