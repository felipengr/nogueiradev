export function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Felipe Nogueira",
		url: "https://felipenogueira.dev", // MUDE PARA SEU DOMÍNIO
		image: "https://felipenogueira.dev/og-image.png",
		sameAs: ["https://github.com/felipengr", "https://www.linkedin.com/in/nogueirafelipe94/"],
		jobTitle: "Full Stack Developer",
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
			"React",
			"Next.js",
			"Node.js",
			"TypeScript",
			"VTEX IO",
			"FastStore",
			"JavaScript",
			"Web Development",
		],
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	)
}
