"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { brandsData } from "@/lib/data/brands"

export function Brands() {
	const t = useTranslations("brands")
	const brands = brandsData.filter((brand) => brand.available)

	if (brands.length === 0) {
		return null
	}

	const track = [...brands, ...brands]

	return (
		<section id="brands" className="section-glow section-glow-violet py-20">
			<div className="container mx-auto max-w-6xl px-4">
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
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="marquee-fade overflow-hidden rounded-3xl border bg-white py-10 shadow-xl mx-4 md:mx-auto md:max-w-6xl"
			>
				<div className="marquee-track flex w-max items-center gap-20 px-10">
					{track.map((brand, index) => (
						<div
							key={`${brand.name}-${index}`}
							className="relative h-14 w-40 shrink-0 transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-48"
						>
							<Image
								src={brand.logo}
								alt={brand.name}
								fill
								sizes="200px"
								className="object-contain"
							/>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
