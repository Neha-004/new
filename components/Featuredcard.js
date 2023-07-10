import React from 'react';
import { motion } from 'framer-motion'

const FeatureCard = () => {
  return (
    <div className='bg-black w-[100%]  h-[60%] '>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='w-full  h-50 mx-auto'
      >
      </motion.div>
      <div className='w-[100%] h-[100%]'>
        <img src="anim3.gif" alt="API" className='w-full   h-full mt-4 object-cover   ' />
      </div>
    </div>
  );
};

export default FeatureCard;