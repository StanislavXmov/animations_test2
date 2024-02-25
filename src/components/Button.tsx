import { motion } from 'framer-motion';

export const Button = ({title}: {title: string}) => {
  return (
    <div>
      <motion.button
        className='h-12 rounded-full px-8 bg-gray-600 text-white'
        whileHover={{
          scale: 1.2,
        }}
        whileFocus={{
          scale: 1.3,
        }}
        whileTap={{
          scale: 1,
        }}
      >
        {title}
      </motion.button>
    </div>
  );
}
