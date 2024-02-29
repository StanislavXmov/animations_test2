import React, { FC, useState, PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FadeWrapper: FC<PropsWithChildren<{isActive: boolean}>> = ({children, isActive}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{opacity: 0}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const SlideWrapper: FC<PropsWithChildren<{
  isActive: boolean,
  direction?: 1 |-1,
  distance?: number,
}>> = ({children, isActive, direction = 1, distance = 200}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{opacity: 0, x: (distance * -1) * direction}}
          initial={{opacity: 0, x: distance * direction}}
          animate={{opacity: 1, x: 0}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const Fade = () => {
  const [isToggle, setIsToogle] = useState(false);
  return (
    <div className='w-96 h-96 px-6 py-4 border rounded-lg overflow-hidden'>
      <button
        className='h-12 rounded-full px-8 bg-gray-600 text-white hover:bg-gray-500'
        onClick={() => setIsToogle(prev => !prev)}
      >
        Toggle
      </button>
      <FadeWrapper isActive={isToggle}>
        <div className="w-80 mt-4 px-6 py-4 rounded overflow-hidden shadow-lg bg-slate-100">
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </FadeWrapper>
      <SlideWrapper isActive={isToggle}>
        <div className="w-80 mt-4 px-6 py-4 rounded overflow-hidden shadow-lg bg-slate-100">
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </SlideWrapper>
      <SlideWrapper direction={-1} distance={32} isActive={isToggle}>
        <div className="w-80 mt-4 px-6 py-4 rounded overflow-hidden shadow-lg bg-slate-100">
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </SlideWrapper>
    </div>
  )
}
