import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useState } from 'react';

import CartIcon from './assets/cart.svg?react';


export const Cart = () => {
  const [counter, setCounter] = useState(0);
  const scale = useSpring(1);
  const addToCart = () => {
    if (counter > 4) {
      return;
    }
    scale.set(scale.get() + 0.2);
    setCounter(prev => prev + 1);
  }
  const removeFromCart = () => {
    if (counter === 0) {
      return;
    }
    scale.set(scale.get() - 0.2);
    setCounter(prev => prev - 1);
  }
  return (
    <div className='flex gap-8'>
        <motion.div
          className='rounded-full w-32 h-12 bg-blue-400 flex items-center justify-center text-white'
          style={{
            scale,
          }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
        >
          {counter}
          <CartIcon className='h-8 w-8' />
        </motion.div>
        <motion.button
          className='h-12 rounded-full px-8 bg-gray-600 text-white'
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 1,
          }}
          onClick={addToCart}
        >
          Add
        </motion.button>
        <motion.button
          className='h-12 rounded-full px-8 bg-gray-600 text-white'
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 1,
          }}
          onClick={removeFromCart}
        >
          Remove
        </motion.button>
      </div>
  );
}
