export const profileData = {
	name: "Felipe Nogueira",
	role: "Full Stack Developer",
	yearsOfExperience: 6,
	github: {
		username: "felipengr",
	},
	mainTechnologies: [
		{ name: "React", icon: "⚛️", category: "Frontend" },
		{ name: "React Native", icon: "📱", category: "Mobile" },
		{ name: "Next.js", icon: "▲", category: "Frontend" },
		{ name: "Node.js", icon: "🟢", category: "Backend" },
		{ name: "TypeScript", icon: "📘", category: "Language" },
		{ name: "VTEX IO", icon: "🛒", category: "E-commerce" },
		{ name: "VTEX FastStore", icon: "⚡", category: "E-commerce" },
		{ name: "Docker", icon: "🐳", category: "DevOps" },
		{ name: "Google Analytics 4", icon: "📊", category: "Analytics" },
		{ name: "Google Tag Manager", icon: "🏷️", category: "Analytics" },
		{ name: "Android", icon: "🤖", category: "Mobile" },
	],
	techStack: {
		frontend: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
		backend: ["Node.js", "GraphQL", "REST APIs", "Express"],
		ecommerce: ["VTEX IO", "VTEX FastStore"],
		mobile: ["React Native", "Android"],
		analytics: ["Google Analytics 4", "Google Tag Manager"],
		devops: ["Docker", "Git", "CI/CD"],
	},
	contact: {
		email: "felipenogueira.94@gmail.com",
		linkedin: "https://www.linkedin.com/in/nogueirafelipe94/",
		github: "https://github.com/felipengr",
	},
}

export type TechCategory =
	| "Frontend"
	| "Backend"
	| "Mobile"
	| "E-commerce"
	| "Analytics"
	| "DevOps"
	| "Language"
