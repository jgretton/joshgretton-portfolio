"use client";

import { type Heading } from "@/lib/extractHeadings";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

interface TableOfContentsProps {
	headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>("");
	const [mobileOpen, setMobileOpen] = useState(false);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const mobileRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headings.length === 0) return;

		const headingElements = headings
			.map(({ id }) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		observerRef.current = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{ rootMargin: "0px 0px -70% 0px", threshold: 0 },
		);

		headingElements.forEach((el) => observerRef.current!.observe(el));

		return () => observerRef.current?.disconnect();
	}, [headings]);

	useEffect(() => {
		if (!mobileOpen) return;
		const onPointerDown = (e: MouseEvent | TouchEvent) => {
			if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
				setMobileOpen(false);
			}
		};
		document.addEventListener("mousedown", onPointerDown);
		document.addEventListener("touchstart", onPointerDown);
		return () => {
			document.removeEventListener("mousedown", onPointerDown);
			document.removeEventListener("touchstart", onPointerDown);
		};
	}, [mobileOpen]);

	if (headings.length === 0) return null;

	const activeHeading = headings.find((h) => h.id === activeId);

	const mobileLinkClass = (id: string) =>
		`text-sm transition-colors ${
			activeId === id
				? "font-medium text-accent"
				: "font-light text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
		}`;

	const desktopLinkClass = (id: string, level: 2 | 3) => {
		const isActive = activeId === id;
		const indent = level === 3 ? "pl-7" : "pl-4";
		return `block border-l py-1 text-sm transition-colors ${indent} ${
			isActive
				? "border-accent font-medium text-accent"
				: "border-gray-200 font-light text-stone-500 hover:border-gray-400 hover:text-stone-800 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30 dark:hover:text-stone-200"
		}`;
	};

	return (
		<>
			<div
				ref={mobileRef}
				className="sticky top-16 z-30 -mx-4 mt-10 sm:-mx-12 md:hidden"
			>
				<div className="dark:bg-dark/90 border-y border-gray-200 bg-gray-50/90 backdrop-blur-md dark:border-white/10">
					<button
						type="button"
						onClick={() => setMobileOpen((v) => !v)}
						aria-expanded={mobileOpen}
						aria-controls="toc-mobile-panel"
						className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-12"
					>
						<span className="flex min-w-0 items-baseline gap-2 text-sm">
							<span className="shrink-0 font-medium">On this page</span>
							{activeHeading && (
								<>
									<span className="text-stone-400 dark:text-stone-600">·</span>
									<span className="truncate font-light text-stone-500 dark:text-stone-400">
										{activeHeading.text}
									</span>
								</>
							)}
						</span>
						<ChevronDownIcon
							className={`size-4 shrink-0 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
						/>
					</button>
					{mobileOpen && (
						<nav
							id="toc-mobile-panel"
							aria-label="Table of contents"
							className="max-h-[60vh] overflow-y-auto border-t border-gray-200 px-4 pb-4 pt-3 sm:px-12 dark:border-white/10"
						>
							<ul className="flex flex-col gap-2">
								{headings.map(({ text, id, level }) => (
									<li key={id} className={level === 3 ? "ml-3" : ""}>
										<a
											href={`#${id}`}
											onClick={() => setMobileOpen(false)}
											aria-current={activeId === id ? "location" : undefined}
											className={mobileLinkClass(id)}
										>
											{text}
										</a>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>

			<aside className="hidden md:sticky md:top-20 md:mt-20 md:block md:h-fit md:w-1/4">
				<nav aria-label="Table of contents">
					<p className="mb-4 text-xs font-normal uppercase tracking-wider text-stone-400 dark:text-stone-500">
						On this page
					</p>
					<ul className="flex flex-col">
						{headings.map(({ text, id, level }) => (
							<li key={id}>
								<a
									href={`#${id}`}
									aria-current={activeId === id ? "location" : undefined}
									className={desktopLinkClass(id, level)}
								>
									{text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</>
	);
}