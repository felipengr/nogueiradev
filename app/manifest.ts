import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Felipe Nogueira | Criação de Sites e Lojas Virtuais",
		short_name: "Felipe Nogueira",
		description:
			"Desenvolvedor full stack especializado em sites e lojas virtuais rápidas e feitas para vender.",
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
