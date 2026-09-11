"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { brandsData } from "@/lib/data/brands"
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
			label: t("brandsServed"),
			value: `${brandsData.length}+`,
		},
	]

	// WhatsApp link com mensagem
	const whatsappMessage = encodeURIComponent(
		"Olá! Vim através do seu site e gostaria de solicitar um orçamento."
	)
	const whatsappLink = `https://wa.me/5511974084935?text=${whatsappMessage}`

	return (
		<section
			id="home"
			className="section-glow relative flex min-h-screen items-center justify-center px-4 py-20"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col justify-center space-y-8"
					>
						<div className="space-y-4">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="glass inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground"
							>
								<span className="h-2 w-2 rounded-full bg-secondary" />
								{t("eyebrow")}
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-display text-gradient font-bold"
							>
								{t("headline")}
							</motion.h1>
						</div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="max-w-xl text-lg leading-relaxed text-muted-foreground"
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
								className="group rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 cursor-pointer"
								asChild
							>
								<Link
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => gtmEvents.whatsappClick("hero")}
								>
									{t("ctaPrimary")}
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="glass rounded-full border-2 cursor-pointer hover:bg-muted"
								onClick={() => {
									document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
								}}
							>
								{t("ctaSecondary")}
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
										className="glass rounded-full border hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
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
										className="glass rounded-full border hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
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
										className="glass rounded-full border hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300"
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
									className="glass relative rounded-3xl border p-8 shadow-lg transition-all hover:shadow-xl cursor-default"
								>
									<div className="space-y-2">
										<p className="text-gradient-accent text-5xl font-bold">{stat.value}</p>
										<p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
									</div>
									<div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-secondary" />
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
