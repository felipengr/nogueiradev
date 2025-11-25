"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale()
	const { theme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const [buttonRect, setButtonRect] = useState<DOMRect | null>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const languages = [
		{ code: "pt-BR", label: "PT", flag: "🇧🇷" },
		{ code: "en", label: "EN", flag: "🇺🇸" },
	]

	// Fecha dropdown ao clicar fora
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	const handleToggle = () => {
		if (buttonRef.current) {
			setButtonRect(buttonRef.current.getBoundingClientRect())
		}
		setIsOpen(!isOpen)
	}

	const switchLanguage = (newLocale: string) => {
		const segments = pathname.split("/").filter(Boolean)
		const pathWithoutLocale = segments.slice(1).join("/")
		const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`
		router.push(newPath)
		setIsOpen(false)
	}

	// Define cores baseado no tema
	const isDark = theme === "dark"
	const dropdownBg = isDark ? "#1a1a1a" : "#ffffff"
	const dropdownBorder = isDark ? "#262626" : "#e5e7eb"
	const hoverBg = isDark ? "hover:bg-zinc-800" : "hover:bg-gray-100"

	return (
		<>
			<Button
				ref={buttonRef}
				variant="ghost"
				size="sm"
				onClick={handleToggle}
				className="gap-2 cursor-pointer"
			>
				<Globe className="h-4 w-4" />
				<span className="text-sm font-medium">
					{languages.find((l) => l.code === locale)?.label}
				</span>
			</Button>

			{isOpen && buttonRect && (
				<motion.div
					ref={dropdownRef}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					className="fixed z-[100] w-32 rounded-lg border-2 p-2 shadow-xl"
					style={{
						backgroundColor: dropdownBg,
						borderColor: dropdownBorder,
						top: `${buttonRect.bottom + 8}px`,
						right: `${window.innerWidth - buttonRect.right}px`,
					}}
				>
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => switchLanguage(lang.code)}
							className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors cursor-pointer ${
								locale === lang.code ? "bg-primary text-primary-foreground" : hoverBg
							}`}
							type="button"
						>
							<span className="mr-2">{lang.flag}</span>
							{lang.label}
						</button>
					))}
				</motion.div>
			)}
		</>
	)
}
