import Logo from "./Logo";
import {MdArrowForward} from 'react-icons/md'
import {motion} from 'framer-motion'
import { reveal } from "../utils/animaiton";
import { animationStart } from "../utils/animaiton";
import Developer from './Developer'

function Navbar(){


    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: animationStart }}
          className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
        >
          <motion.div
            variants={reveal}
            initial="hiddenVarient"
            animate="revealtedVarient"
            transition={{
              ease: "easeIn",
              type: "tween",
              staggerChildren: 0.1,
              duration: 0.5,
              delayChildren: animationStart + 0.5,
            }}
            className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
          >
            <motion.div className="flex flex-row items-center gap-2" variants={reveal}>
              <Logo />
              <p className="font-bold text-lg tracking-wide text-dark-50">
                Framer <br />
                Motion
              </p>
            </motion.div>
      
            <motion.div>
              <motion.ul className="flex flex-row items-center gap-12 list-none <md:hidden">
                <motion.li className="cursor-pointer" variants={reveal}>
                  <a href="#" className="font-medium">
                    Home
                  </a>
                </motion.li>
                <motion.li className="cursor-pointer" variants={reveal}>
                  <a href="#" className="font-medium">
                    Solutions
                  </a>
                </motion.li>
                <motion.li className="cursor-pointer" variants={reveal}>
                  <a href="#" className="font-medium">
                    Resources
                  </a>
                </motion.li>
                <motion.li className="cursor-pointer" variants={reveal}>
                  <a href="#" className="font-medium">
                    About
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
      
            <motion.div className="flex items-center justify-center gap-2 cursor-pointer" variants={reveal}>
              <Developer/>
            </motion.div>
      
          </motion.div>
        </motion.div>
      );
      

}

export default Navbar;