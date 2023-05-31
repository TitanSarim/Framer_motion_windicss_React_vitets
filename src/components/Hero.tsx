import {motion} from 'framer-motion'
import { animationStart } from '../utils/animaiton'
import { reveal } from '../utils/animaiton'

function Hero() {

    return (
        <motion.div 
            layout
            initial={{height: 0}}
            animate={{height: "unset"}}
            transition={{ delay: animationStart, duration: 1}}
        className="flex flex-col items-center justify-center gap-5">
            
            <motion.div 
                variants={reveal} 
                initial="hiddenVarient" 
                animate="revealtedVarient" 
                transition={{delay: animationStart + 1, duration: 0.5}}
            
            className="w-130 text-center pt-100px mt-12">
                <p className="text-3xl antialiased text-dark-300 font-bold ">Enchanting Motion, Unleashing Animated Delights</p>
            </motion.div>

            <motion.div 
                variants={reveal} 
                initial="hiddenVarient" 
                animate="revealtedVarient" 
                transition={{delay: animationStart + 1.2, duration: 0.5}}
            className="w-120 text-center pb-5 <lg:w-96 <md:w-64">
                <p>Experience a mesmerizing world of animation, where captivating visuals dance to life. Our site brings you a collection of immersive animated wonders, showcasing the magic of movement and creativity in just a click.</p>
            </motion.div>

        </motion.div>
    )

}

export default Hero