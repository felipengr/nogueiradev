"use client"

import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import { servicesData } from "@/lib/data/services"

export function Services() {
	const t = useTranslations("services")
	const locale = useLocale() as "pt-BR" | "en"

	return (
		<section id="services" className="section-glow py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-display-sm font-bold mb-4">{t("title")}</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{servicesData.map((service, index) => {
						const Icon = service.icon
						return (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="glass h-full rounded-2xl border p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary">
										<Icon className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold mb-2">{service.title[locale]}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{service.description[locale]}
									</p>
								</Card>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
