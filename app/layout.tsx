import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Felipe Nogueira | Full Stack Developer",
	description: "Portfolio de Felipe Nogueira - Full Stack Developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return children
}
