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

	return (
		<section id="brands" className="section-glow section-glow-violet py-20 px-4">
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

				<div className="flex flex-wrap justify-center gap-4">
					{brands.map((brand, index) => (
						<motion.div
							key={brand.name}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="glass group flex h-28 w-[calc(50%-0.5rem)] items-center justify-center rounded-2xl border p-4 sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)]"
						>
							<div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white p-4">
								<div className="relative h-10 w-full">
									<Image
										src={brand.logo}
										alt={brand.name}
										fill
										sizes="160px"
										className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
