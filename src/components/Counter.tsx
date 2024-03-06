import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from 'usehooks-ts'

export const Counter = () => {
  const [count, setCount] = useState(42);

  useInterval(() => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }, 1000);

  return (
    <div className='w-32 h-32 flex items-center justify-center mt-6 mb-12 px-6 py-4 bg-gray-100 rounded-lg text-[48px]'>
      <AnimatePresence>
        <motion.h2
          initial={{
            y: -64,
            opacity: 0,
          }}
          exit={{
            y: 32,
            opacity: 0,
            position: 'absolute',
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          key={`count${count}`}
        >
          {count}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
