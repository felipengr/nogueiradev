"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { featuredProjects } from "@/lib/data/projects"
import type { GitHubRepo } from "@/lib/github"

interface ProjectsProps {
	githubRepos?: GitHubRepo[]
}

export function Projects({ githubRepos = [] }: ProjectsProps) {
	const t = useTranslations("projects")
	const locale = useLocale()

	// IDs dos projetos em destaque para não duplicar
	const featuredIds = featuredProjects.map((p) => p.repoUrl.split("/").pop()?.toLowerCase())

	// Filtrar repos do GitHub que não estão em destaque
	const otherRepos = githubRepos.filter((repo) => !featuredIds.includes(repo.name.toLowerCase()))

	return (
		<section id="projects" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
					<p className="text-lg text-muted-foreground">{t("subtitle")}</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="mb-16">
					<h3 className="text-2xl font-bold mb-8">{t("featured")}</h3>
					<div className="grid gap-6 md:grid-cols-2">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card
									className="group h-full p-6 border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer overflow-hidden relative"
									style={{
										backgroundColor: "var(--color-card)",
									}}
								>
									{/* Gradient overlay on hover */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

									<div className="relative space-y-4">
										{/* Header */}
										<div className="flex items-start justify-between gap-4">
											<div className="space-y-2 flex-1">
												<h4 className="text-xl font-bold group-hover:text-primary transition-colors">
													{project.name}
												</h4>
												<p className="text-sm text-muted-foreground">
													{project.description[locale as "pt-BR" | "en"]}
												</p>
											</div>
										</div>

										{/* Technologies */}
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant="secondary" className="bg-muted">
													{tech}
												</Badge>
											))}
										</div>

										{/* Links */}
										<div className="flex gap-3 pt-2">
											<Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
												<Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
													<Github className="h-4 w-4" />
													{t("viewCode")}
												</Link>
											</Button>
											{project.demoUrl && (
												<Button size="sm" className="flex-1 gap-2" asChild>
													<Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
														<ExternalLink className="h-4 w-4" />
														{t("viewDemo")}
													</Link>
												</Button>
											)}
										</div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>

				{/* Other GitHub Projects */}
				{otherRepos.length > 0 && (
					<div>
						<h3 className="text-2xl font-bold mb-8">{t("otherProjects")}</h3>
						<div className="grid gap-6 md:grid-cols-3">
							{otherRepos.map((repo, index) => (
								<motion.div
									key={repo.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Card
										className="group h-full p-6 border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
										style={{
											backgroundColor: "var(--color-card)",
										}}
									>
										<Link
											href={repo.html_url}
											target="_blank"
											rel="noopener noreferrer"
											className="block space-y-4"
										>
											{/* Header */}
											<div className="space-y-2">
												<div className="flex items-start justify-between gap-2">
													<h4 className="text-lg font-bold group-hover:text-primary transition-colors flex-1">
														{repo.name}
													</h4>
													{repo.stargazers_count > 0 && (
														<div className="flex items-center gap-1 text-sm text-muted-foreground">
															<Star className="h-4 w-4 fill-primary text-primary" />
															<span>{repo.stargazers_count}</span>
														</div>
													)}
												</div>
												<p className="text-sm text-muted-foreground line-clamp-2">
													{repo.description || t("noDescription")}
												</p>
											</div>

											{/* Language & Topics */}
											<div className="space-y-2">
												{repo.language && (
													<Badge variant="outline" className="text-xs">
														{repo.language}
													</Badge>
												)}
												{repo.topics.length > 0 && (
													<div className="flex flex-wrap gap-1">
														{repo.topics.slice(0, 3).map((topic) => (
															<Badge key={topic} variant="secondary" className="text-xs">
																{topic}
															</Badge>
														))}
													</div>
												)}
											</div>
										</Link>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				)}

				{/* View All on GitHub */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-center mt-12"
				>
					<Button size="lg" variant="outline" className="gap-2" asChild>
						<Link href="https://github.com/felipengr" target="_blank" rel="noopener noreferrer">
							<Github className="h-5 w-5" />
							{t("viewAllGithub")}
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	)
}
