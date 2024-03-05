import { Link, Route } from 'react-router-dom';
import { AnimatedRoutes } from '../AnimatedRoutes';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    className="w-80 mt-4 px-6 py-4 rounded overflow-hidden shadow-lg bg-slate-100"
    initial={{
      opacity: 0,
      x: 100,
    }}
    exit={{
      opacity: 0,
      y: 200,
    }}
    animate={{
      opacity: 1,
      x: 0,
      y: 0,
    }}
  >
    About
  </motion.div>
);

const Contact = () => (
  <motion.div
    className="w-80 mt-4 px-6 py-4 rounded overflow-hidden shadow-lg bg-slate-100"
    initial={{
      opacity: 0,
      x: 100,
    }}
    exit={{
      opacity: 0,
      y: 200,
    }}
    animate={{
      opacity: 1,
      x: 0,
      y: 0,
    }}
  >
    Contact
  </motion.div>
);

const Home = () => (
  <motion.div
    className="w-80 mt-4 px-6 py-4 rounded overflow-hidden shadow-lg bg-slate-100"
    initial={{
      opacity: 0,
      x: 100,
    }}
    exit={{
      opacity: 0,
      y: 200,
    }}
    animate={{
      opacity: 1,
      x: 0,
      y: 0,
    }}
  >
    Home
  </motion.div>
);

export const Navigation = () => {
  return (
    <div>
      <nav className='flex gap-5'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
      <div>
        <AnimatedRoutes>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </AnimatedRoutes>
      </div>
    </div>
  )
}
