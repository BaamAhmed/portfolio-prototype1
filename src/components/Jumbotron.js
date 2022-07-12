import {motion} from 'framer-motion'

const Jumbotron = ({darkMode}) => {
    const primaryColor = `${darkMode ? 'text-white' : 'text-red-500'}`
    const secondaryColor = `${darkMode ? 'text-slate-500' : 'text-black'}`
    const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
    // const primaryHex = `${darkMode ? '#ededed' : '#ef7777'}`
  return (
    <div style={{height: 600}} className='mb-10 md:mb-0 flex flex-col justify-center px-3 md:px-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className="mt-20 md:mt-0 order-2 md:order-1 flex flex-col justify-center" >
                <h3 className={`text-2xl font-medium ${secondaryColor}`} >Hello there!</h3>
                <h1 className={`text-5xl font-bold ${primaryColor}`} >I'm Bassam Ahmed</h1>
                <p className={`w-100 md:w-1/2 ${secondaryColor}`} >A developer by day, and by night... still a developer, but now sleep deprived.</p>
            </div>
            <div style={{height:300}} className="mt-16  items-center flex justify-center order-1 md:order-2 mb-30 md:mb-0">
                <motion.div
                    className={`rando-container ${primaryBg}`}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    
                </motion.div>
                {/* <motion.div
                    
                    animate= {{
                        // opacity: [0,0.8,0.3,0.8,0],
                        x: [0,40, -40,0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity
                    }}
                >
                    <UndrawProgramming height='300px' class='' primaryColor={primaryHex} />
                </motion.div> */}
            </div>
        </div>
    </div>
  )
}

export default Jumbotron