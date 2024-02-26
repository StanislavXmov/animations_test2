import { motion } from 'framer-motion';

export const Banner = () => {
  return (
    <div className='flex items-center justify-center bg-gray-100 rounded-lg'>
        <div className='w-[150px] overflow-hidden flex relative flex-col aspect-[2/4]'>
          <div className='h-full fadeout'>
            <motion.div
              className='text-[80px] font-mono origin-top-left leading-[0.8] inset-1 absolute break-all p-2'
              animate={{
                opacity: [0, 1, 1, 0],
                x: [150, 0, 0, -150]
              }}
              transition={{
                repeat: Infinity,
                times: [0, 0.25, 0.75, 1],
                duration: 2,
                repeatDelay: 1,
              }}
            >
              Ipsum dolor
            </motion.div>
          </div>
          <p className='mt-auto p-2'>Lorem ipsum dolor sit.</p>
        </div>
      </div>
  );
}
