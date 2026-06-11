import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	allowedDevOrigins: ["192.168.1.88"],
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "utfs.io",
			},
		],
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
