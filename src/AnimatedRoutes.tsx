import {  FC, PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes } from 'react-router-dom';

export const AnimatedRoutes: FC<PropsWithChildren> = ({children}) => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        {children}
      </Routes>
    </AnimatePresence>
  );
}
