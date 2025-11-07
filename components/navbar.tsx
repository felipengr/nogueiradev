"use client"

import { motion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useMemo, useState } from "react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"

export function Navbar() {
	const t = useTranslations("nav")
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState("home")
	const [scrolled, setScrolled] = useState(false)
	const { scrollY } = useScroll()

	// Usando useMemo para evitar recriação
	const navItems = useMemo(
		() => [
			{ id: "home", label: t("home") },
			{ id: "skills", label: t("skills") },
			{ id: "experience", label: t("experience") },
			{ id: "projects", label: t("projects") },
			{ id: "contact", label: t("contact") },
		],
		[t]
	)

	// Detecta scroll para mudar background
	useEffect(() => {
		const unsubscribe = scrollY.on("change", (latest) => {
			setScrolled(latest > 50)
		})
		return () => unsubscribe()
	}, [scrollY])

	// Scroll spy para detectar seção ativa
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100

			for (let i = navItems.length - 1; i >= 0; i--) {
				const section = document.getElementById(navItems[i].id)
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(navItems[i].id)
					break
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll() // Chama uma vez no mount
		return () => window.removeEventListener("scroll", handleScroll)
	}, [navItems])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
		setIsOpen(false)
	}

	return (
		<>
			{/* Desktop Navbar */}
			<motion.nav
				className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
					scrolled ? "bg-background/95 shadow-lg" : "bg-transparent border-transparent"
				}`}
			>
				<div className="container mx-auto px-4">
					<div className="flex h-16 items-center justify-between">
						{/* Logo */}
						<motion.button
							onClick={() => scrollToSection("home")}
							className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type="button"
						>
							FN
						</motion.button>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center gap-8">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`text-sm font-medium transition-colors cursor-pointer relative ${
										activeSection === item.id
											? "text-primary"
											: "text-muted-foreground hover:text-foreground"
									}`}
									type="button"
								>
									{item.label}
									{activeSection === item.id && (
										<motion.div
											layoutId="activeSection"
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										/>
									)}
								</button>
							))}
						</div>

						{/* Actions */}
						<div className="flex items-center gap-2">
							<LanguageSwitcher />
							<ThemeSwitcher />

							{/* Mobile Menu Button */}
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden cursor-pointer"
								onClick={() => setIsOpen(!isOpen)}
							>
								{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
							</Button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, x: "100%" }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: "100%" }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
					className="fixed inset-0 z-40 bg-background md:hidden"
				>
					<div className="flex flex-col items-center justify-center h-full gap-8">
						{navItems.map((item, index) => (
							<motion.button
								key={item.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								onClick={() => scrollToSection(item.id)}
								className={`text-2xl font-bold cursor-pointer ${
									activeSection === item.id ? "text-primary" : "text-foreground hover:text-primary"
								}`}
								type="button"
							>
								{item.label}
							</motion.button>
						))}
					</div>
				</motion.div>
			)}
		</>
	)
}
