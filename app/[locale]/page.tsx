import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/sections/about"
import { Brands } from "@/components/sections/brands"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"
import { getGitHubStats } from "@/lib/github"

export default async function Home() {
	const githubStats = await getGitHubStats("felipengr")

	return (
		<>
			<Navbar />
			<Hero githubStats={githubStats || undefined} />
			<Brands />
			<Services />
			<Projects />
			<About />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	)
}
