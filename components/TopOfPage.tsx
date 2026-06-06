'use client';
import { useEffect, useState } from 'react';

const TopOfPage = () => {
	const [showScroll, setShowScroll] = useState<boolean>(false);

	useEffect(() => {
		const checkScrollTop = () => {
			setShowScroll(window.scrollY > 300);
		};
		window.addEventListener('scroll', checkScrollTop);
		return () => window.removeEventListener('scroll', checkScrollTop);
	}, []);

	return (
		<div
			className={`${
				showScroll ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
			} fixed bottom-10 right-3 z-40 size-fit text-right transition-opacity duration-300`}
		>
			<button
				aria-label="Scroll to top of page"
				className="h-8 w-8 cursor-pointer rounded-sm bg-slate-700/40 text-gray-950 dark:bg-slate-200/40"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				tabIndex={showScroll ? 0 : -1}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 text-white"
					viewBox="0 0 24 24"
					stroke="currentColor"
					fill="none"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 15l7-7 7 7"
					/>
				</svg>
			</button>
		</div>
	);
};

export default TopOfPage;
