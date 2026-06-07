'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';

const Hero = ({
	heading,
	subHeading,
	back,
}: {
	heading: string;
	subHeading?: string;
	back?: boolean;
}) => {
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.section
			initial={{ opacity: 0, translateX: prefersReducedMotion ? 0 : -100 }}
			animate={{ opacity: 1, translateX: 0 }}
			style={{ willChange: 'transform, opacity' }}
			transition={
				prefersReducedMotion
					? { duration: 0.01 }
					: {
							duration: 1.2,
							opacity: { type: 'tween', ease: 'easeOut', delay: 0.1 },
							translateX: { type: 'spring', damping: 25, stiffness: 120 },
						}
			}
			className={`dark:bg-dark relative z-0 mx-auto mt-20 flex h-[50dvh] items-center px-4 pt-12 max-w-5xl sm:px-12`}
		>
			{back && (
				<Link
					href={'/'}
					className="group fixed top-10 inline-flex items-center gap-2"
				>
					<ArrowLeftIcon
						className="size-5 text-gray-800 transition-transform group-hover:-translate-x-1 dark:text-white"
						aria-hidden="true"
					/>
					back
				</Link>
			)}
			<div>
				<h1 className=" font-light tracking-wide text-5xl leading-relaxed md:text-7xl md:leading-relaxed">
					{heading}
				</h1>
				{subHeading && (
					<p className="text-base font-light dark:text-stone-300 text-stone-500 tracking-wider">
						{subHeading}
					</p>
				)}
			</div>
		</motion.section>
	);
};

export default Hero;
