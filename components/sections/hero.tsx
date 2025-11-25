"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { gtmEvents } from "@/lib/gtm"

interface HeroProps {
	githubStats?: {
		publicRepos: number
		totalCommits: number
	}
}

export function Hero({ githubStats }: HeroProps) {
	const t = useTranslations("hero")

	const stats = [
		{ label: t("yearsOfExperience"), value: "6+" },
		{
			label: t("projectsCompleted"),
			value: githubStats ? `${githubStats.publicRepos}+` : "50+",
		},
		{
			label: "Commits",
			value: githubStats ? `${githubStats.totalCommits}+` : "1000+",
		},
	]

	// WhatsApp link com mensagem
	const whatsappMessage = encodeURIComponent(
		"Olá! Vim através do seu site e gostaria de conversar sobre um projeto."
	)
	const whatsappLink = `https://wa.me/5511974084935?text=${whatsappMessage}`

	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center px-4 py-20"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col justify-center space-y-8"
					>
						<div className="space-y-2">
							<motion.p
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="text-lg font-medium text-muted-foreground"
							>
								{t("greeting")}
							</motion.p>

							<motion.h1
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
							>
								{t("name")}
							</motion.h1>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="flex items-center gap-3"
							>
								<div className="h-1 w-12 rounded-full bg-primary" />
								<h2 className="text-2xl font-semibold text-primary sm:text-3xl">{t("title")}</h2>
							</motion.div>
						</div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-lg leading-relaxed text-muted-foreground"
						>
							{t("subtitle")}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="flex flex-wrap gap-4"
						>
							<Button
								size="lg"
								className="group bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
								onClick={() => {
									document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
								}}
							>
								{t("cta")}
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="bg-card border-2 cursor-pointer hover:bg-muted"
								asChild
							>
								<Link
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => gtmEvents.whatsappClick("hero")}
								>
									{t("contact")}
								</Link>
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="flex gap-4"
						>
							<motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
								<Link
									href="https://github.com/felipengr"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() =>
										gtmEvents.socialClick("github", "hero", "https://github.com/felipengr")
									}
								>
									<Button
										size="icon"
										variant="ghost"
										className="bg-card hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
									>
										<Github className="h-5 w-5" />
									</Button>
								</Link>
							</motion.div>

							<motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
								<Link
									href="https://www.linkedin.com/in/nogueirafelipe94/"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() =>
										gtmEvents.socialClick(
											"linkedin",
											"hero",
											"https://www.linkedin.com/in/nogueirafelipe94/"
										)
									}
								>
									<Button
										size="icon"
										variant="ghost"
										className="bg-card hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
									>
										<Linkedin className="h-5 w-5" />
									</Button>
								</Link>
							</motion.div>

							<motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
								<Link
									href="mailto:felipenogueira.94@gmail.com"
									onClick={() =>
										gtmEvents.socialClick("email", "hero", "mailto:felipenogueira.94@gmail.com")
									}
								>
									<Button
										size="icon"
										variant="ghost"
										className="bg-card hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
									>
										<Mail className="h-5 w-5" />
									</Button>
								</Link>
							</motion.div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex items-center justify-center"
					>
						<div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-12">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
									whileHover={{ scale: 1.05 }}
									className="relative rounded-2xl border-2 bg-card p-8 shadow-lg transition-all hover:shadow-xl cursor-default"
									style={{
										backgroundColor: "var(--color-card)",
									}}
								>
									<div className="space-y-2">
										<p className="text-5xl font-bold text-primary">{stat.value}</p>
										<p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
									</div>
									<div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-primary" />
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
					className="h-8 w-5 rounded-full border-2 border-foreground p-1"
				>
					<motion.div className="h-2 w-1 rounded-full bg-foreground" />
				</motion.div>
			</motion.div>
		</section>
	)
}
