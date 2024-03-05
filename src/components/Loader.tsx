import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className='w-96 h-24 flex items-center flex-col justify-center mt-6 mb-12 px-6 py-4 bg-gray-100 rounded-lg'>
      <motion.h4 
        style={{color:' #6a6b6d'}}
        animate={{
          color: ['#b3b3b3', '#6a6b6d', '#181818'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          times: [0, 0.5, 1],
          duration: 1,
        }}
      >
        Loading...
      </motion.h4>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 100,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1.5,
          ease: 'linear'
        }}
        style={{
          background: '#b3b3b3',
          height: 4,
          width: 100
        }}
      />
      <motion.div
        initial={{
          x: -120,
        }}
        animate={{
          x: 120,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1.8,
          ease: 'linear'
        }}
        style={{
          background: '#6a6b6d',
          height: 4,
          width: 40
        }}
      />
      <motion.div
        initial={{
          x: -80,
        }}
        animate={{
          x: 80,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1.3,
          ease: 'linear'
        }}
        style={{
          background: '#181818',
          height: 4,
          width: 200
        }}
      />
    </div>
  );
}
