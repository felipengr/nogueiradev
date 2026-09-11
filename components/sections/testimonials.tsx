"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import { testimonialsData } from "@/lib/data/testimonials"

export function Testimonials() {
	const t = useTranslations("testimonials")
	const locale = useLocale() as "pt-BR" | "en"
	const testimonials = testimonialsData.filter((item) => item.published)

	if (testimonials.length === 0) {
		return null
	}

	return (
		<section id="testimonials" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-display-sm font-bold mb-4">{t("title")}</h2>
					<p className="text-lg text-muted-foreground">{t("subtitle")}</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-3">
					{testimonials.map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="glass h-full rounded-2xl border p-6">
								<Quote className="h-6 w-6 text-secondary" />
								<p className="mt-4 text-muted-foreground italic leading-relaxed">
									&ldquo;{item.quote[locale]}&rdquo;
								</p>
								<div className="mt-6">
									<p className="font-semibold">{item.author}</p>
									<p className="text-sm text-muted-foreground">
										{item.role}
										{item.company ? ` · ${item.company}` : ""}
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
