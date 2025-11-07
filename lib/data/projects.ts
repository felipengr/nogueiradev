export interface FeaturedProject {
	id: string
	name: string
	description: {
		"pt-BR": string
		en: string
	}
	image?: string
	technologies: string[]
	repoUrl: string
	demoUrl?: string
	featured: boolean
	status: "completed" | "in-progress" | "archived"
}

export const featuredProjects: FeaturedProject[] = [
	{
		id: "emporio-casarao-v2",
		name: "Empório Casarão V2",
		description: {
			"pt-BR":
				"E-commerce completo desenvolvido com FastStore, focado em performance e experiência do usuário. Implementação de features avançadas de catálogo e checkout.",
			en: "Complete e-commerce built with FastStore, focused on performance and user experience. Advanced catalog and checkout features implementation.",
		},
		technologies: ["FastStore", "React", "TypeScript", "GraphQL", "VTEX"],
		repoUrl: "https://github.com/felipengr/emporio-casarao-v2",
		featured: true,
		status: "completed",
	},
	{
		id: "b8one-challenge",
		name: "B8One Challenge",
		description: {
			"pt-BR":
				"Desafio técnico desenvolvido com foco em clean code e boas práticas. Implementação de funcionalidades complexas com arquitetura escalável.",
			en: "Technical challenge focused on clean code and best practices. Complex features implementation with scalable architecture.",
		},
		technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
		repoUrl: "https://github.com/felipengr/b8one-challage",
		featured: true,
		status: "completed",
	},
	{
		id: "nlw-connect-web",
		name: "NLW Connect",
		description: {
			"pt-BR":
				"Aplicação web desenvolvida durante o NLW da Rocketseat. Projeto focado em conectar pessoas e compartilhar conhecimento através de vídeos.",
			en: "Web application developed during Rocketseat's NLW. Project focused on connecting people and sharing knowledge through videos.",
		},
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
		repoUrl: "https://github.com/felipengr/nlw-connect-web",
		featured: true,
		status: "completed",
	},
	{
		id: "nearby",
		name: "Nearby",
		description: {
			"pt-BR":
				"Aplicativo mobile desenvolvido em React Native para descobrir estabelecimentos próximos. Integração com mapas e geolocalização.",
			en: "Mobile app built with React Native to discover nearby establishments. Maps and geolocation integration.",
		},
		technologies: ["React Native", "TypeScript", "Expo", "Maps API"],
		repoUrl: "https://github.com/felipengr/nearby",
		featured: true,
		status: "completed",
	},
]
