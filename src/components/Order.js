import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const textVariants = {
  hidden: {
    opacity: 0,
    y: -1,
  },
  visable: {
    opacity: 1,
    y: 0,
    scale: 1.2,
    transition: {
      type: 'spring',
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    }
  }
}

const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle ] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000)
  },[setShowModal]);


  return (
    <motion.div className="container order"
    variants={textVariants}
    initial='hidden'
    animate='visable'>
      <AnimatePresence>{showTitle && <motion.h2
      exit={{x:'-100vw'}}>Thank you for your order :)</motion.h2> }</AnimatePresence>
      <motion.p
      variants={textVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div variants={textVariants} key={topping}>{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;