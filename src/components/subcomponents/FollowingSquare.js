import {motion} from 'framer-motion'

const FollowingSquare = ({x,y}) => {
  


  

    
  return (
    <div style={{perspective: 400}} >
        <motion.div
            animate= {{
                // x: (900-x)/20,
                // y: (1000-y)/20,
                // skewY: -(posY-x)/100,
                // skewY: -(1000-y)/100,
                rotateY: -(900-x)/15,
                
                // rotateZ: (1000-y)/20,
                rotateX: (1000-x)/15
                // backgroundColor: `rgb(${x%255},${y%255},100,1)`
            }}
            className='bg-white rando-container'
        >
          {x},{y}
          <br />
        </motion.div>
        
    </div>
  )
}


export default FollowingSquare