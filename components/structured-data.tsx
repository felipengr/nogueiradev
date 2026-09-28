export function StructuredData() {
	const baseUrl = "https://www.nogueiradev.com.br"

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Felipe Nogueira",
		url: baseUrl,
		image: `${baseUrl}/opengraph-image`,
		description:
			"Desenvolvedor full stack especializado em sites e lojas virtuais rápidas e feitas para vender.",
		sameAs: ["https://github.com/felipengr", "https://www.linkedin.com/in/nogueirafelipe94/"],
		jobTitle: "Desenvolvedor Full Stack",
		worksFor: {
			"@type": "Organization",
			name: "Cadastra",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "São Paulo",
			addressCountry: "BR",
		},
		email: "felipenogueira.94@gmail.com",
		telephone: "+5511974084935",
		knowsAbout: [
			"Criação de sites",
			"Lojas virtuais",
			"E-commerce",
			"React",
			"Next.js",
			"Node.js",
			"TypeScript",
			"VTEX IO",
			"FastStore",
		],
		makesOffer: {
			"@type": "Offer",
			itemOffered: {
				"@type": "Service",
				name: "Criação de sites e lojas virtuais",
				description:
					"Desenvolvimento de sites institucionais e lojas virtuais de alta performance para marcas.",
				areaServed: "BR",
			},
		},
	}

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline script, content is JSON.stringify'd
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	)
}
