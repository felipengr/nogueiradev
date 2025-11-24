import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { getGitHubRepos, getGitHubStats } from "@/lib/github"

export default async function Home() {
	const [githubStats, githubRepos] = await Promise.all([
		getGitHubStats("felipengr"),
		getGitHubRepos("felipengr", 6),
	])

	return (
		<>
			<Navbar />
			<Hero githubStats={githubStats || undefined} />
			<Skills />
			<Experience />
			<Projects githubRepos={githubRepos} />
			<Contact />
			<Footer />
		</>
	)
}
