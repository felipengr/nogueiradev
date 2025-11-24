"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Footer() {
	const [year, setYear] = useState(2025)
	const t = useTranslations("footer")

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const navItems = [
		{ id: "home", label: t("nav.home") },
		{ id: "skills", label: t("nav.skills") },
		{ id: "experience", label: t("nav.experience") },
		{ id: "projects", label: t("nav.projects") },
		{ id: "contact", label: t("nav.contact") },
	]

	const socialLinks = [
		{
			icon: Github,
			href: "https://github.com/felipengr",
			label: "GitHub",
		},
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/in/nogueirafelipe94/",
			label: "LinkedIn",
		},
		{
			icon: Mail,
			href: "mailto:felipenogueira.94@gmail.com",
			label: "Email",
		},
	]

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	useEffect(() => {
		setYear(new Date().getFullYear())
	}, [])

	return (
		<footer className="border-t bg-card/50 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-8 md:grid-cols-4">
					{/* Brand */}
					<div className="space-y-4">
						<motion.h3
							className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors"
							onClick={scrollToTop}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							FN
						</motion.h3>
						<p className="text-sm text-muted-foreground">{t("tagline")}</p>
					</div>

					{/* Navigation */}
					<div className="space-y-4">
						<h4 className="font-semibold">{t("navigation")}</h4>
						<ul className="space-y-2">
							{navItems.map((item) => (
								<li key={item.id}>
									<button
										onClick={() => scrollToSection(item.id)}
										className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
										type="button"
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Social */}
					<div className="space-y-4">
						<h4 className="font-semibold">{t("social")}</h4>
						<div className="flex flex-col gap-2">
							{socialLinks.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									<social.icon className="h-4 w-4" />
									<span>{social.label}</span>
								</Link>
							))}
						</div>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h4 className="font-semibold">{t("contact")}</h4>
						<div className="space-y-2 text-sm text-muted-foreground">
							<p>São Paulo, Brasil</p>
							<Link
								href="mailto:felipenogueira.94@gmail.com"
								className="flex items-center gap-2 hover:text-primary transition-colors"
							>
								<Mail className="h-3 w-3" />
								<span>felipenogueira.94@gmail.com</span>
							</Link>
							<Link
								href="https://wa.me/5511974084935"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 hover:text-primary transition-colors"
							>
								<Phone className="h-3 w-3" />
								<span>+55 11 97408-4935</span>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted-foreground">
						© {year} Felipe Nogueira. {t("rights")}
					</p>

					{/* Back to Top Button */}
					<Button
						size="icon"
						variant="outline"
						onClick={scrollToTop}
						className="rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
					>
						<ArrowUp className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</footer>
	)
}
