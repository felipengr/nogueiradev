"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { experienceData } from "@/lib/data/experience"

export function Experience() {
	const t = useTranslations("experience")
	const locale = useLocale()

	const formatPeriod = (start: string, end: string) => {
		const startDate = new Date(start)
		const endDate = end === "current" ? new Date() : new Date(end)

		const startMonth = startDate.toLocaleDateString(locale, {
			month: "short",
			year: "numeric",
		})
		const endMonth =
			end === "current"
				? t("current")
				: endDate.toLocaleDateString(locale, { month: "short", year: "numeric" })

		return `${startMonth} - ${endMonth}`
	}

	return (
		<section id="experience" className="py-20 px-4 bg-muted/30">
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

				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

					{/* Experience Cards */}
					<div className="space-y-12">
						{experienceData.map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative"
							>
								{/* Timeline Dot */}
								<div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

								<Card
									className="ml-0 md:ml-20 p-6 border-2 shadow-lg hover:shadow-xl transition-all"
									style={{
										backgroundColor: "var(--color-card)",
									}}
								>
									<div className="space-y-4">
										{/* Header */}
										<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
											<div className="space-y-2">
												<h3 className="text-2xl font-bold">{exp.company}</h3>
												<div className="flex items-center gap-2 text-muted-foreground">
													<Briefcase className="h-4 w-4" />
													<span className="font-medium">{exp.role}</span>
												</div>
												<div className="flex items-center gap-2 text-sm text-muted-foreground">
													<Calendar className="h-4 w-4" />
													<span>{formatPeriod(exp.period.start, exp.period.end)}</span>
												</div>
											</div>

											{exp.current && (
												<Badge className="bg-primary text-primary-foreground w-fit">
													{t("current")}
												</Badge>
											)}
										</div>

										{/* Description */}
										<p className="text-muted-foreground leading-relaxed">
											{exp.description[locale as "pt-BR" | "en"]}
										</p>

										{/* Highlights */}
										{exp.highlights && (
											<div className="space-y-2">
												<h4 className="font-semibold text-sm">{t("highlights")}:</h4>
												<ul className="space-y-1">
													{exp.highlights[locale as "pt-BR" | "en"].map((highlight) => (
														<li
															key={highlight}
															className="text-sm text-muted-foreground flex items-start gap-2"
														>
															<span className="text-primary mt-1">▸</span>
															<span>{highlight}</span>
														</li>
													))}
												</ul>
											</div>
										)}

										{/* Clients */}
										{exp.clients && (
											<div className="space-y-2">
												<div className="flex items-center gap-2 text-sm font-semibold">
													<MapPin className="h-4 w-4" />
													<span>{t("clients")}:</span>
												</div>
												<div className="flex flex-wrap gap-2">
													{exp.clients.map((client) => (
														<Badge key={client} variant="secondary">
															{client}
														</Badge>
													))}
												</div>
											</div>
										)}

										{/* Technologies */}
										<div className="space-y-2">
											<h4 className="font-semibold text-sm">{t("technologies")}:</h4>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map((tech) => (
													<Badge
														key={tech}
														variant="outline"
														className="bg-primary/10 border-primary/20"
													>
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
