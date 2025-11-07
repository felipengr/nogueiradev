"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { profileData } from "@/lib/data/profile"

export function Skills() {
	const t = useTranslations("skills")

	const categories = [
		{ title: "Frontend", techs: profileData.techStack.frontend, icon: "💻" },
		{ title: "Backend", techs: profileData.techStack.backend, icon: "⚙️" },
		{ title: "Mobile", techs: profileData.techStack.mobile, icon: "📱" },
		{
			title: "E-commerce",
			techs: profileData.techStack.ecommerce,
			icon: "🛒",
		},
		{
			title: "Analytics",
			techs: profileData.techStack.analytics,
			icon: "📊",
		},
		{ title: "DevOps", techs: profileData.techStack.devops, icon: "🐳" },
	]

	return (
		<section id="skills" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
					<p className="text-lg text-muted-foreground">{t("subtitle")}</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{categories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card
								className="p-6 h-full border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
								style={{
									backgroundColor: "var(--color-card)",
								}}
							>
								<div className="flex items-center gap-3 mb-4">
									<span className="text-3xl">{category.icon}</span>
									<h3 className="text-xl font-semibold">{category.title}</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{category.techs.map((tech) => (
										<Badge key={tech} variant="secondary" className="bg-muted hover:bg-muted/80">
											{tech}
										</Badge>
									))}
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="mt-12"
				>
					<h3 className="text-2xl font-bold mb-6 text-center">{t("allTech")}</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{profileData.mainTechnologies.map((tech, index) => (
							<motion.div
								key={tech.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileHover={{ scale: 1.05 }}
							>
								<Badge
									variant="outline"
									className="px-4 py-2 text-base cursor-pointer bg-card hover:bg-primary hover:text-primary-foreground transition-colors border-2"
								>
									<span className="mr-2">{tech.icon}</span>
									{tech.name}
								</Badge>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
