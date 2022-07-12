import {motion} from 'framer-motion'

const AnimatedSquare = ({delay, darkMode}) => {
    const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`

  return (
    <motion.div
        className={`${primaryBg} small-container`}
        animate = {{
            opacity: [0,1,1,0]
        }}
        transition = {{
            duration: 5,
            repeat: Infinity,
            delay: delay
        }}
    >
    </motion.div>
  )
}

export default AnimatedSquare