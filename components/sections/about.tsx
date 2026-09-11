"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { experienceData } from "@/lib/data/experience"
import { profileData } from "@/lib/data/profile"

export function About() {
	const t = useTranslations("about")
	const companies = experienceData.map((exp) => exp.company)

	return (
		<section id="about" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-3xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-display-sm font-bold mb-6">{t("title")}</h2>
					<p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("bio")}</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-10"
				>
					<p className="text-sm font-semibold text-muted-foreground mb-3">{t("companiesLabel")}</p>
					<div className="flex flex-wrap justify-center gap-2">
						{companies.map((company) => (
							<Badge key={company} variant="secondary" className="px-4 py-1.5 text-sm">
								{company}
							</Badge>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<p className="text-sm font-semibold text-muted-foreground mb-3">{t("techLabel")}</p>
					<div className="flex flex-wrap justify-center gap-2">
						{profileData.mainTechnologies.map((tech) => (
							<Badge
								key={tech.name}
								variant="outline"
								className="bg-card border-2 px-3 py-1.5 text-sm"
							>
								<span className="mr-1.5">{tech.icon}</span>
								{tech.name}
							</Badge>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
