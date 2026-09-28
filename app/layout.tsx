import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Felipe Nogueira | Criação de Sites e Lojas Virtuais",
	description:
		"Desenvolvedor full stack especializado em sites e lojas virtuais rápidas e feitas para vender.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return children
}
