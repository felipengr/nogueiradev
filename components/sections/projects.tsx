"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import { portfolioCases } from "@/lib/data/portfolio"

export function Projects() {
	const t = useTranslations("projects")
	const locale = useLocale() as "pt-BR" | "en"

	return (
		<section id="portfolio" className="section-glow py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-display-sm font-bold mb-4">{t("title")}</h2>
					<p className="text-lg text-muted-foreground">{t("subtitle")}</p>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{portfolioCases.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<Card className="group h-full overflow-hidden rounded-2xl border gap-0 p-0 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
								<div className="relative aspect-4/3 overflow-hidden bg-muted">
									<Image
										src={project.image}
										alt={project.brand}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										sizes="400px"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-bold mb-1">{project.brand}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{project.description[locale]}
									</p>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
