import { useWindowScroll } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';

const Header = () => {
  const [{ y }] = useWindowScroll();

  return (
    <motion.header
      className="fixed z-20 w-full flex items-center justify-between flex-wrap bg-gray-600 text-white p-6"
      style={{justifyContent: y || 0 > 100 ? 'flex-start' : 'center'}}
      animate={{
        opacity: y || 0 > 100 ? 0.5 : 1,
      }}
    >
      <motion.span layout className="font-semibold text-xl tracking-tight">Header</motion.span>
    </motion.header>
  )
}

export default Header