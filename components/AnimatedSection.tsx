'use client';
import { motion, useReducedMotion } from 'motion/react';
import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const AnimatedSection = ({ children, className }: Props) => {
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.section
			initial={{ opacity: 0, translateY: prefersReducedMotion ? 0 : 100 }}
			animate={{ opacity: 1, translateY: 0 }}
			style={{ willChange: 'transform, opacity' }}
			transition={
				prefersReducedMotion
					? { duration: 0.01 }
					: {
							duration: 1,
							opacity: { type: 'tween', ease: 'easeOut', delay: 0.3 },
							translateY: { type: 'spring', damping: 30, stiffness: 100, delay: 0.2 },
						}
			}
			className={className}
		>
			{children}
		</motion.section>
	);
};

export default AnimatedSection;
