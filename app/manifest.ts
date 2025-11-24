import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Felipe Nogueira | Full Stack Developer",
		short_name: "Felipe Nogueira",
		description: "Full Stack Developer especializado em React, Next.js, Node.js e VTEX IO.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#3b82f6",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	}
}
