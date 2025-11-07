"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const languages = [
		{ code: "pt-BR", label: "PT", flag: "🇧🇷" },
		{ code: "en", label: "EN", flag: "🇺🇸" },
	]

	// Fecha dropdown ao clicar fora
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	const switchLanguage = (newLocale: string) => {
		// Remove o locale atual do pathname
		const segments = pathname.split("/").filter(Boolean)
		const pathWithoutLocale = segments.slice(1).join("/")

		// Cria o novo pathname com o novo locale
		const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`

		router.push(newPath)
		setIsOpen(false)
	}

	return (
		<div className="relative" ref={dropdownRef}>
			<Button
				variant="ghost"
				size="sm"
				onClick={() => setIsOpen(!isOpen)}
				className="gap-2 bg-card hover:bg-muted cursor-pointer"
			>
				<Globe className="h-4 w-4" />
				<span className="text-sm font-medium">
					{languages.find((l) => l.code === locale)?.label}
				</span>
			</Button>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					className="absolute right-0 top-12 z-50 w-32 rounded-lg border-2 bg-card p-2 shadow-xl"
					style={{ backgroundColor: "var(--color-card)" }}
				>
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => switchLanguage(lang.code)}
							className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted cursor-pointer ${
								locale === lang.code ? "bg-primary text-primary-foreground" : ""
							}`}
							type="button"
						>
							<span className="mr-2">{lang.flag}</span>
							{lang.label}
						</button>
					))}
				</motion.div>
			)}
		</div>
	)
}
