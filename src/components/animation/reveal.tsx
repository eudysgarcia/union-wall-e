import { motion } from 'motion/react';
import type { ComponentProps, PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
}> & Omit<ComponentProps<typeof motion.div>, 'initial' | 'whileInView' | 'transition' | 'viewport'>;

export default function Reveal({ children, delay = 0, y = 20, className = '', ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}


