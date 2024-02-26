import { motion, useTransform, useMotionValue } from 'framer-motion';


export const Drag = () => {
  const x = useMotionValue(0);
  const scaleButton = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ['12px', '2px', '12px']);
  const backgroundColor = useTransform(x, [-100, 0, 100], ['rgb(96 165 250);', 'rgb(75, 85, 99)', 'rgb(229 231 235)']);
  const color = useTransform(x, [-100, 0, 100], ['#fff', '#fff', '#000']);

  return (
    <div>
      <motion.div
        className='flex items-center justify-center h-12 rounded-full px-8 text-white'
        style={{
          x,
          scale: scaleButton,
          borderRadius,
          backgroundColor,
          color,
        }}
        drag='x'
        dragConstraints={{left: 0, right: 0}}
      >
        Drag!
      </motion.div>
    </div>
  );
}
