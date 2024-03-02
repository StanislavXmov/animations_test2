import { useState } from 'react';
import { motion } from 'framer-motion';

export const Scale = () => {
  const [isToggle, setIsToogle] = useState(false);
  return (
    <div className='w-[50%] h-96 px-6 py-4 overflow-hidden'>
      <button
        className='h-12 rounded-full px-8 bg-gray-600 text-white hover:bg-gray-500'
        onClick={() => setIsToogle(prev => !prev)}
      >
        Toggle
      </button>
      <motion.div layout className='mt-6 px-6 py-4  bg-gray-100 rounded-sm'>
        <motion.h3 layout className='font-bold text-xl mb-2'>Title</motion.h3>
        {isToggle && (<p className='class="text-gray-700 text-base"'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat neque minus, doloremque esse quia ipsam vero perspiciatis animi maxime quae, repudiandae accusamus delectus nihil ea dolorum quasi enim architecto, excepturi beatae cum eos commodi molestiae quaerat! Nam nisi perferendis accusamus non eligendi. Quasi aliquam et ipsum. Sint quis blanditiis atque quaerat facilis illum quisquam minima ex delectus laboriosam dignissimos ducimus, pariatur maiores sapiente velit?</p>)}
      </motion.div>
    </div>
  );
}
