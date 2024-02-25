import { motion } from 'framer-motion';

import RainIcon from './assets/rain.svg?react';
import DesktopIcon from './assets/desktop.svg?react';

export const Icons = () => {
  return (
    <div className='flex'>
      <motion.div
        className='bg-gray-100 w-24 h-24 rounded-md flex justify-center items-center'
        animate={{
          scale: [1, 2, 1, 1],
          rotate: [0, 0, 360, 360],
          borderRadius: ['6px', '6px', '50%', '6px']
        }}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <RainIcon className='w-16 h-16' />
      </motion.div>
      <motion.div
        className='bg-gray-200 w-24 h-24 rounded-md flex justify-center items-center'
        animate={{
          scale: [1, 2, 1, 1],
          rotate: [0, 0, 360, 360],
          borderRadius: ['6px', '6px', '50%', '6px']
        }}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <DesktopIcon className='w-16 h-16' />
      </motion.div>
    </div>
  );
}
