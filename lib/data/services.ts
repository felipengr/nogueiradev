import { Globe, Rocket, ShoppingCart, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
	id: string
	icon: LucideIcon
	title: {
		"pt-BR": string
		en: string
	}
	description: {
		"pt-BR": string
		en: string
	}
}

export const servicesData: Service[] = [
	{
		id: "sites",
		icon: Globe,
		title: {
			"pt-BR": "Criação de Sites",
			en: "Website Creation",
		},
		description: {
			"pt-BR":
				"Sites institucionais, modernos e responsivos que transmitem credibilidade para consultórios, escritórios e negócios locais.",
			en: "Modern, responsive institutional websites that build credibility for practices, offices, and local businesses.",
		},
	},
	{
		id: "landing-pages",
		icon: Rocket,
		title: {
			"pt-BR": "Landing Pages",
			en: "Landing Pages",
		},
		description: {
			"pt-BR":
				"Páginas de alta conversão focadas em captar leads, agendar clientes e transformar visitantes em oportunidades de negócio.",
			en: "High-conversion pages focused on capturing leads, booking clients, and turning visitors into business opportunities.",
		},
	},
	{
		id: "ecommerce",
		icon: ShoppingCart,
		title: {
			"pt-BR": "Lojas Virtuais",
			en: "Online Stores",
		},
		description: {
			"pt-BR":
				"E-commerces completos com VTEX IO e FastStore — a mesma tecnologia usada por grandes marcas — pra vender online com performance e segurança.",
			en: "Complete e-commerce stores built with VTEX IO and FastStore — the same technology used by major brands — to sell online with performance and security.",
		},
	},
	{
		id: "maintenance",
		icon: Wrench,
		title: {
			"pt-BR": "Manutenção e Suporte",
			en: "Maintenance & Support",
		},
		description: {
			"pt-BR":
				"Suporte contínuo pra manter seu site sempre atualizado, seguro e no ar, com ajustes e melhorias sempre que precisar.",
			en: "Ongoing support to keep your site updated, secure, and always online, with adjustments and improvements whenever you need them.",
		},
	},
]
