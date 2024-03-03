import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const SignIn = ({setIsLoggedIn}: {setIsLoggedIn: (type: 'signin' | 'signup') => void}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.2}}}
    >
      <h2 className="font-semibold text-xl tracking-tight">Sign In</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam obcaecati earum quo excepturi doloremque, soluta quam illum error perspiciatis tempora est vel voluptatum.
      </p>
      <button
        className='h-12 rounded-full px-8 bg-gray-600 text-white hover:bg-gray-500'
        onClick={() => setIsLoggedIn('signup')}
      >
        Sign Up
      </button>
    </motion.div>
  );
}

const SignUp = ({setIsLoggedIn}: {setIsLoggedIn: (type: 'signin' | 'signup') => void}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.2}}}
    >
      <h2 className="font-semibold text-xl tracking-tight">Sign Up</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis debitis minima velit reiciendis doloribus exercitationem provident quaerat molestias! Incidunt maiores quisquam est temporibus, culpa, sit quibusdam ad nam, molestiae aut enim obcaecati quis tenetur aliquam deleniti recusandae architecto debitis perspiciatis soluta error. Ut blanditiis deleniti necessitatibus laborum esse error libero recusandae expedita impedit sapiente sit, sed veritatis itaque quod mollitia repellat iste quas.
      </p>
      <button
        className='h-12 rounded-full px-8 bg-gray-600 text-white hover:bg-gray-500'
        onClick={() => setIsLoggedIn('signin')}
      >
        Sign In
      </button>
    </motion.div>
  );
}

export const Modal = () => {
  const [loggedIn, setIsLoggedIn] = useState<'' | 'signin' | 'signup'>('');
  return (
    <div>
      <button
        className='h-12 rounded-full px-8 bg-gray-600 text-white hover:bg-gray-500'
        onClick={() => setIsLoggedIn('signin')}
      >
        Sign In
      </button>
      <LayoutGroup>
        <AnimatePresence>
          {loggedIn && (
            <>
              <motion.div 
                initial={{opacity: 0, y: 10}}
                exit={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                className='fixed z-20 flex flex-col justify-start gap-6 items-center inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
              >
                <motion.div
                  layout
                  transition={{duration: 0.1, ease: 'linear'}}
                  className='w-96 z-20 rounded-lg bg-white text-left shadow-xl transition-all p-8 mt-32'
                >
                  <AnimatePresence mode='wait'>
                    {loggedIn === 'signin' && (
                      <SignIn key={'signin'} setIsLoggedIn={setIsLoggedIn} />
                    )}
                    {loggedIn === 'signup' && (
                      <SignUp key={'signup'} setIsLoggedIn={setIsLoggedIn} />
                    )}
                  </AnimatePresence>
                </motion.div>
                <button
                  className='h-12 rounded-full px-8 bg-gray-600 text-white hover:bg-gray-500'
                  onClick={() => setIsLoggedIn('')}
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  )
}
