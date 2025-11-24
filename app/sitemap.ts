import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://felipenogueira.dev" // MUDE PARA SEU DOMÍNIO

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					"pt-BR": `${baseUrl}/pt-BR`,
					en: `${baseUrl}/en`,
				},
			},
		},
		{
			url: `${baseUrl}/pt-BR`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/en`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
	]
}
