import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -50],
        transition: {
            x: {yoyo: Infinity,
            duration: 1, ease: 'easeOut'},
            y: {yoyo: Infinity, duration: 0.5, ease: 'easeOut'}
        }
    }
}

const Loader = () => {


    return (
        <motion.div 
        className="loader-container"
        variants={loaderVariants}
        animate='animationOne'>

        </motion.div>
    )
};

export default Loader;