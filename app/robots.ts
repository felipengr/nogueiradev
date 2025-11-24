import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/"],
			},
		],
		sitemap: "https://felipenogueira.dev/sitemap.xml", // MUDE PARA SEU DOMÍNIO
	}
}
