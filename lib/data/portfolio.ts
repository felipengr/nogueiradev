export interface PortfolioCase {
	id: string
	brand: string
	image: string
	description: {
		"pt-BR": string
		en: string
	}
}

export const portfolioCases: PortfolioCase[] = [
	{
		id: "reserva",
		brand: "Reserva",
		image: "/images/portfolio/reserva-portfolio.png",
		description: {
			"pt-BR": "Loja virtual de moda masculina, com foco em performance e conversão.",
			en: "Menswear online store, built with performance and conversion in mind.",
		},
	},
	{
		id: "cartier",
		brand: "Cartier",
		image: "/images/portfolio/cartier-portfolio.png",
		description: {
			"pt-BR": "E-commerce de alta joalheria, priorizando elegância e velocidade de carregamento.",
			en: "High-end jewelry e-commerce, built for an elegant and fast shopping experience.",
		},
	},
	{
		id: "uno-de-50",
		brand: "Uno de 50",
		image: "/images/portfolio/unode50-portfolio.png",
		description: {
			"pt-BR": "Loja online de acessórios e joias, com experiência de compra fluida.",
			en: "Online store for jewelry and accessories, with a smooth shopping experience.",
		},
	},
	{
		id: "chilli-beans",
		brand: "Chilli Beans",
		image: "/images/portfolio/chillibeans-portfolio.png",
		description: {
			"pt-BR": "E-commerce de óculos e acessórios, otimizado para alto volume de vendas.",
			en: "Eyewear and accessories e-commerce, optimized for high sales volume.",
		},
	},
	{
		id: "taco",
		brand: "Taco",
		image: "/images/portfolio/taco-portfolio.png",
		description: {
			"pt-BR": "Loja virtual de moda casual, com catálogo completo e checkout otimizado.",
			en: "Casual fashion online store, with a full catalog and optimized checkout.",
		},
	},
	{
		id: "baw",
		brand: "Baw Clothing",
		image: "/images/portfolio/baw-portfolio.png",
		description: {
			"pt-BR": "E-commerce de streetwear, feito para uma navegação rápida e responsiva.",
			en: "Streetwear e-commerce, built for fast and responsive browsing.",
		},
	},
	{
		id: "creamy",
		brand: "Creamy",
		image: "/images/portfolio/creamy-portfolio.png",
		description: {
			"pt-BR": "Loja online de moda feminina, com identidade visual forte e boa usabilidade.",
			en: "Women's fashion online store, with strong visual identity and great usability.",
		},
	},
	{
		id: "mr-cat",
		brand: "Mr Cat",
		image: "/images/portfolio/mrcat-portfolio.png",
		description: {
			"pt-BR": "E-commerce de calçados, desenvolvido com foco em performance mobile.",
			en: "Footwear e-commerce, built with a focus on mobile performance.",
		},
	},
	{
		id: "emporio-casarao",
		brand: "Empório Casarão",
		image: "/images/portfolio/casarao-portfolio.png",
		description: {
			"pt-BR": "E-commerce de artesanato e gastronomia local, feito com FastStore.",
			en: "Local crafts and food e-commerce, built with FastStore.",
		},
	},
]
