import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion} from "framer-motion"

const backdrop = {
    hidden: {
        opacity: 0, 
    },
    visable: {
        opacity: 1,
        transition: {delay: 0.1, duration: 0.3}
    }
};

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visable: {
        y: '30vh',
        opacity: 1,
    }
}
const Modal = ({ showModal, setShowModal}) => {

    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
            <motion.div className="backdrop"
            variants={backdrop}
            initial='hidden'
            animate='visable'
            exit='hidden'>
                <motion.div className="modal"
                variants={modalVariants}>
                    <p>Want to make another pizza?</p>
                    <Link to='/'><button
                    onClick={()=>setShowModal(false)}>Start again</button></Link>
                </motion.div>

            </motion.div> )}
        </AnimatePresence>
    )
};

export default Modal;