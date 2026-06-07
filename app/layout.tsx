import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

export const metadata = {
	title: {
		default: 'Josh Gretton ',
		template: '%s | Josh Gretton',
	},
	description:
		'Discover the portfolio of Josh Gretton, a web developer specialising in Next.js and Tailwind CSS.',
	keywords: [
		'Josh Gretton',
		'Web Developer',
		'Portfolio',
		'Next.js',
		'Tailwind CSS',
		'JavaScript Developer',
	],
	alternates: {
		canonical: 'https://www.joshgretton.co.uk',
	},
	openGraph: {
		title: 'Josh Gretton',
		description:
			'Discover the portfolio of Josh Gretton, a web developer specialising in Next.js and Tailwind CSS.',
		url: 'https://www.joshgretton.co.uk',
		siteName: 'Josh Gretton Portfolio',
		images: [
			{
				url: '/og-image.svg',
				width: 1200,
				height: 630,
				alt: 'Josh Gretton Portfolio Banner',
			},
		],
		locale: 'en_GB',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Josh Gretton',
		description:
			'Discover the portfolio of Josh Gretton, a web developer specialising in Next.js and Tailwind CSS.',
		images: ['/og-image.svg'],
	},
	metadataBase: new URL('https://www.joshgretton.co.uk'),
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${figtree.className} dark:bg-dark relative mx-auto bg-gray-50 text-gray-900 dark:text-gray-100`}
			>
				<ThemeProvider attribute="class">
					<a
						href="#main-content"
						className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-9999 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
					>
						Skip to content
					</a>
					<div>
						<Header />
						<main id="main-content">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
