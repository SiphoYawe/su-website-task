'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';

interface CTAButtonProps {
  primaryText: string;
  secondaryText?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton = ({ primaryText, secondaryText, href, onClick, className = '' }: CTAButtonProps) => {
  const buttonContent = (
    <motion.div 
      className="bg-[#00A48F] rounded-[8px] cursor-pointer relative overflow-hidden flex items-start justify-between px-4 py-4 pb-8 w-full h-full"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 20px rgba(0, 164, 143, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
      onClick={onClick}
    >
      {/* Hover overlay effect */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Button text */}
      <motion.div 
        className="flex-1 z-10"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-nunito font-extrabold text-base lg:text-lg text-white leading-tight mb-0">
          {primaryText}
        </p>
        {secondaryText && (
          <p className="font-nunito font-semibold text-base lg:text-lg text-white leading-tight mt-0.5">
            {secondaryText}
          </p>
        )}
      </motion.div>
      
      {/* Light green circular arrow icon - aligned to top */}
      <motion.div 
        className="flex-shrink-0 ml-4 z-10 mt-0"
        whileHover={{ x: 3, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-10 h-10 bg-[#B1FFBE] rounded-full flex items-center justify-center">
          <IoArrowForward className="w-5 h-5 text-[#353144]" />
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`relative h-full ${className}`}>
      {href ? (
        <Link href={href} className="block h-full">
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </div>
  );
};

export default CTAButton;