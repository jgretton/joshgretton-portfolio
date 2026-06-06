'use client';

import { Route } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function HoverPrefetchLink({
	href,
	children,
	className,
	target,
	onClick,
}: {
	href: Route | string;
	children: React.ReactNode;
	className?: string;
	target?: string;
	onClick?: () => void;
}) {
	const router = useRouter();

	const handleMouseHover = () => {
		router.prefetch(href as string);
	};

	const isExternal = target === '_blank';

	return (
		<Link
			href={href}
			prefetch={false}
			onMouseEnter={handleMouseHover}
			className={className}
			target={target}
			rel={isExternal ? 'noreferrer noopener' : undefined}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
